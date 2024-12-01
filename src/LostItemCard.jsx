import PropTypes from "prop-types";
import "./LostItemCard.css";
import bicycle from "./bicycle.jpeg"

const LostItemCard = ({title,description,category,location,dateLost, email,phone}) => {
    return (
         <div className="lost-item-card">
         <div className="header">
        <span className="status-label">Lost</span>
        <span className="date">{dateLost}</span>
        
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={bicycle} alt={title} className="item-image" />
      </div>
      <div className="details">
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        
        
        
        
      </div>
      <div className="contact-info">
        <p>
        <u><strong>Contact:</strong></u>
        </p>
        <p>Email: {email}</p>
        <p>Phone: {phone || "set private"}</p>
      </div>
      
    </div>
  );
};



// Add PropTypes for validation
LostItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dateLost: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  status: PropTypes.string.isRequired,
  claimedBy: PropTypes.string,
};

// Add default props for optional fields
LostItemCard.defaultProps = {
  phone: "Not provided",
  claimedBy: "N/A",
};

export default LostItemCard;
