import './iPhone3D.css';

const PhoneModel = () => {
  console.log('PhoneModel component is rendering!');
  return (
    <div className="iphone-container">
      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="screen-content">
            <div className="dynamic-island">
              <div className="island-camera"></div>
            </div>
            <div className="screen-placeholder">
              <p>insert image here</p>
            </div>
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