import './Home.css';
import PhoneModel from '../components/iPhone3D';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-hero">
          <div className="home-title-section">
            <h1 className="home-title">WhiteOut</h1>
            <div className="home-text-container">
              <p className="home-description">
                A new game that fuses crosswords with scrabble! Try to achieve WhiteOut by finding all the words in the grid!
              </p>
              <a 
                href="https://apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                <span>Download Now</span>
              </a>
            </div>
          </div>
          <div className="home-model-section">
            <PhoneModel />
          </div>
        </div>
        <div className="home-features">
          <div className="feature-card">
            <h3>Epic Adventures</h3>
            <p>Embark on thrilling quests and discover new worlds</p>
          </div>
          <div className="feature-card">
            <h3>Multiplayer Fun</h3>
            <p>Connect with friends and compete in exciting challenges</p>
          </div>
          <div className="feature-card">
            <h3>Stunning Graphics</h3>
            <p>Experience breathtaking visuals and immersive gameplay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
