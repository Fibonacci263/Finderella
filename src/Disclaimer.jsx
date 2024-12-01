// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Disclaimer.css"; // Include your CSS for styling

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1 className="disclaimer-title">Disclaimer</h1>
      <section className="disclaimer-content">
        <p>
          Finderella is a platform designed to connect individuals who have lost or found items. While we strive to create a safe and effective service, please carefully read and understand the following disclaimers:
        </p>

        <h2>1. No Guarantee of Item Recovery</h2>
        <p>
          Finderella cannot guarantee the recovery of lost items. The platform serves as a connection point, and successful outcomes depend on the accuracy of the information provided and the cooperation of users.
        </p>

        <h2>2. User Responsibility</h2>
        <p>
          Users are solely responsible for the information they share on the platform. Please ensure that all details are accurate, lawful, and respectful. Misuse of the service may result in account suspension or other penalties.
        </p>

        <h2>3. No Liability for Transactions</h2>
        <p>
          Finderella is not responsible for any direct or indirect transactions or interactions that occur as a result of using the platform. Users are encouraged to exercise caution and verify claims independently.
        </p>

        <h2>4. Privacy and Security</h2>
        <p>
          We do not guarantee the confidentiality of the data shared on the platform. Avoid sharing sensitive personal information, and report any suspicious activity immediately.
        </p>

        <h2>5. Use at Your Own Risk</h2>
        <p>
          By using Finderella, you acknowledge that the platform is provided &quot;as-is&quot; without any warranties. Finderella is not liable for any losses, damages, or inconveniences resulting from the use of the service.
        </p>
      </section>

      <section className="contact-section">
        <h2>Need Help?</h2>
        <p>
          If you have questions about this disclaimer or any concerns about the platform, feel free to contact us:
        </p>
        <ul>
          <li>Email: support@finderella.com</li>
          <li>Phone: +263 789 909 865</li>
        </ul>
      </section>
    </div>
  );
};

export default Disclaimer;
