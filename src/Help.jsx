// eslint-disable-next-line no-unused-vars
import React from "react";
import "./styles/Help.css"; // Include your CSS for styling

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">How Can We Help You?</h1>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>1. How do I report a lost item?</h3>
          <p>
            Go to the &quot;Report Lost Item&quot; page from the navigation menu, fill out the form with details about your item, and submit it.
          </p>
        </div>
        <div className="faq-item">
          <h3>2. How do I report a found item?</h3>
          <p>
            Visit the &quot;Report Found Item&quot; page, describe the item you found, and submit the details so others can see it.
          </p>
        </div>
        <div className="faq-item">
          <h3>3. What about valuable items such as Laptops and phones?</h3>
          <p>
            On this matter we advice that any found items that you cannot validate on your own or are too precious to keep, we advice that these items be taken to Asset protection Offices where there are proffesionals who can dessiminate the facts and find the rightful owner, But you can still post the found item on this platform so that they know that their item has been found and upon contact can tell that person to go to asset protection for Validation and Collection.
          </p>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you need additional help, feel free to reach out:</p>
        <ul>
          <li>Email: support@finderella.com</li>
          <li>Phone: +263 789 625 874</li>
        </ul>
      </section>
      
      <section className="tips-section">
        <h2>Helpful Tips</h2>
        
          <p>Provide as much detail as possible when reporting lost or found items.</p>
          <p>Use the search function to quickly check if someone has already found your lost item.</p>
          <p>Be respectful and cooperative when communicating with others through the app.</p>
        
      </section>
    </div>
  );
};

export default Help;
