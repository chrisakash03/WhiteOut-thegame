import './PrivacyStatement.css';

const PrivacyStatement = () => {
  return (
    <div className="privacy-statement">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Statement</h1>
        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We only collect the device ID, and it is not tied to the user.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform. We may also use 
              your information for analytics and to personalize your gaming experience.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information Sharing</h2>
            <p>
              No information is collected and shared.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              There is no sensitive data collected.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Statement</h2>
            <p>
              We may update this privacy statement from time to time. We will notify you of any 
              changes by posting the new statement on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy statement, please contact us at 
              chrisakashh@gmail.com or through our support channels.
            </p>
          </section>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
          Last Updated on 3 Nov 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyStatement;
