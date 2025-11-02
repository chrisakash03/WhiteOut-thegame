import { useEffect, useRef, useState } from 'react';
import './iPhone3D.css';
import videoSrc from '../assets/whiteout-intro-video.mov?url';

const PhoneModel = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const videoRef = useRef(null);

  // Handle video loading and playback with error handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasPlayed = false; // Prevent multiple play attempts

    // Error handler for video loading issues
    const handleError = (e) => {
      console.error('Video error:', e);
      if (video.error) {
        console.error('Video error details:', {
          code: video.error.code,
          message: video.error.message,
        });
      }
    };

    // Improved handler to attempt playback when video is ready
    const attemptPlay = async () => {
      // Don't attempt if already playing or if we've already tried
      if (hasPlayed || !video.paused) {
        return;
      }

      // Check if video is ready to play (readyState >= 2 means enough data loaded)
      if (video.readyState < 2) {
        return;
      }

      try {
        await video.play();
        hasPlayed = true;
        console.log('Video playback started successfully');
      } catch (error) {
        console.warn('Autoplay was prevented:', error.message);
        // Video will not autoplay due to browser policy
        // User interaction is required to start playback
      }
    };

    // Handler for when video metadata is loaded
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded, duration:', video.duration);
    };

    // Add event listeners for multiple loading stages
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', attemptPlay);
    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('canplaythrough', attemptPlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Attempt to play if video is already loaded
    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', attemptPlay);
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('canplaythrough', attemptPlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Handle video time tracking for background fade
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 20) {
        setIsWhiteBackground(true);
      } else {
        setIsWhiteBackground(false);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Control page background based on video time
  useEffect(() => {
    if (isWhiteBackground) {
      document.body.classList.add('white-background');
    } else {
      document.body.classList.remove('white-background');
    }

    return () => {
      document.body.classList.remove('white-background');
    };
  }, [isWhiteBackground]);

  console.log('PhoneModel component is rendering!');
  return (
    <div className="iphone-container">
      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="screen-content">
            <div className="dynamic-island">
              <div className="island-camera"></div>
            </div>
            <video
              ref={videoRef}
              src={videoSrc}
              className="iphone-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
        <div className="side-button left"></div>
        <div className="side-button right"></div>
        <div className="volume-buttons">
          <div className="volume-up"></div>
          <div className="volume-down"></div>
        </div>
        <div className="power-button"></div>
      </div>
    </div>
  );
};

export default PhoneModel;