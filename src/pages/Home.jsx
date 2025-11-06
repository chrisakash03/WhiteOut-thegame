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
                href="https://apps.apple.com/sg/app/whiteout-clear-the-grid/id6753019693" 
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
            <p>Embark on finding words in challenging grids</p>
          </div>
          <div className="feature-card">
            <h3>Difficulty Levels</h3>
            <p>play on Low, Mid, High and Extreme Difficulty!</p>
          </div>
          <div className="feature-card">
            <h3>Stunning Animations</h3>
            <p>Experience smooth visuals and fun gameplay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
