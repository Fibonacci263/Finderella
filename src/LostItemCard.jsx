import PropTypes from "prop-types";
import "./styles/LostItemCard.css";

const LostItemCard = ({
  title,
  description,
  category,
  location,
  dateLost,
  email,
  phone,
  imageUrl,
}) => {
  return (
    <div className="lost-item-card">
      <div className="header">
        <span className="status-label">Lost</span>
        <span className="date">{dateLost}</span>
      </div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      
      <div className="image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="item-image" />
        ) : (
          <p>No image available</p>
        )}
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
          <u>
            <strong>Contact:</strong>
          </u>
        </p>
        <p>Email: {email}</p>
        <p>Phone: {phone || "Not provided"}</p>
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
  imageUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  status: PropTypes.string,
};

// Add default props for optional fields
LostItemCard.defaultProps = {
  phone: "Not provided",
  imageUrl: null,
};

export default LostItemCard;
