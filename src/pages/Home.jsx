import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">Welcome to WhiteOut</h1>
        <p className="home-description">
          Experience the ultimate gaming adventure with WhiteOut. 
          Dive into an immersive world filled with challenges, 
          excitement, and endless possibilities.
        </p>
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
