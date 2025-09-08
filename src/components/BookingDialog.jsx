import React, { useState } from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement
Modal.setAppElement("#root");

const BookingDialog = ({ isOpen, onClose }) => {
  const [bookingType, setBookingType] = useState("Point to Point");
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [bags, setBags] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      bookingType,
      carType,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      pickupTime,
      passengers,
      bags,
    });
    onClose();
  };

  // Professional custom styles for the modal
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 10000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
    },
    content: {
      position: "relative",
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "auto",
      border: "none",
      background: "#fff",
      borderRadius: "16px",
      padding: "0",
      maxWidth: "765px",
      width: "100%",
      maxHeight: "80vh",
      overflowY: "auto",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Book a Cab"
      closeTimeoutMS={300}
    >
      {/* Dialog Header */}
      <div className="dialog-header">
        <h2>Book Your Premium Ride</h2>
        <button className="dialog-close" onClick={onClose} aria-label="Close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="dialog-content">
        <div className="booking-type-section">
          <h3>Select Journey Type</h3>
          <div className="booking-type-selector">
            <button
              type="button"
              className={`booking-type-option ${
                bookingType === "from-airport" ? "active" : ""
              }`}
              onClick={() => setBookingType("from-airport")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>From Airport</span>
            </button>
            <button
              type="button"
              className={`booking-type-option ${
                bookingType === "to-airport" ? "active" : ""
              }`}
              onClick={() => setBookingType("to-airport")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 22L13 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 22L9 2L13 11L22 15L2 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>To Airport</span>
            </button>
            <button
              type="button"
              className={`booking-type-option ${
                bookingType === "Point to Point" ? "active" : ""
              }`}
              onClick={() => setBookingType("Point to Point")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3L15 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 15L3 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2L20 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L12 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12L16 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 4L12 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Point to Point</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-grid">
            {/* Car Type Selection */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L3 15V19C3 19.5523 3.44772 20 4 20H5C5.55228 20 6 19.5523 6 19V18H18V19C18 19.5523 18.4477 20 19 20H20C20.5523 20 21 19.5523 21 19V15L19 13M5 13H19M5 13V9H19V13M6 8V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Car Type</label>
                <select
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose Car Type
                  </option>
                  <option value="sport_car">Sport Car</option>
                  <option value="convertible_car">Convertible Car</option>
                  <option value="sedan_car">Sedan Car</option>
                  <option value="luxury_car">Luxury Car</option>
                  <option value="electric_car">Electric Car</option>
                  <option value="coupe_car">Coupe Car</option>
                </select>
              </div>
            </div>

            {/* Pickup Location */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 10.5C17.5 14.5 12 20 12 20C12 20 6.5 14.5 6.5 10.5C6.5 6.5 9 4 12 4C15 4 17.5 6.5 17.5 10.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="field-content">
                <label>Pickup Location</label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Pick Up Location
                  </option>
                  <option value="abu_dhabi">Abu Dhabi</option>
                  <option value="alain">Alain</option>
                  <option value="dubai">Dubai</option>
                  <option value="sharjah">Sharjah</option>
                </select>
              </div>
            </div>

            {/* Dropoff Location */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 10.5C17.5 14.5 12 20 12 20C12 20 6.5 14.5 6.5 10.5C6.5 6.5 9 4 12 4C15 4 17.5 6.5 17.5 10.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="field-content">
                <label>Dropoff Location</label>
                <select
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Drop Off Location
                  </option>
                  <option value="abu_dhabi">Abu Dhabi</option>
                  <option value="alain">Alain</option>
                  <option value="sharjah">Sharjah</option>
                </select>
              </div>
            </div>

            {/* Pickup Date */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M8 3V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="7"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="11"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="15"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="17"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Pickup Date</label>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Pickup Time */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Pickup Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M8 3V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="7"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="11"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="15"
                    y="14"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="17"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="0.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Return Date</label>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19V21M7 19V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10C17 12.7614 14.7614 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 19C3 15.134 6.13401 12 10 12H14C17.866 12 21 15.134 21 19V21H3V19Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Passengers</label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bags */}
            <div className="form-field">
              <div className="field-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 10V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="4"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="field-content">
                <label>Bags</label>
                <select value={bags} onChange={(e) => setBags(e.target.value)}>
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Bag" : "Bags"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Search Rides
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .dialog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 1px solid #eef2f7;
          background: var(--accent-color);
          color: white;
          border-radius: 16px 16px 0 0;
        }

        .dialog-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
        }

        .dialog-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .dialog-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .dialog-content {
          padding: 2rem;
        }

        .booking-type-section h3 {
          margin: 0 0 1rem 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
        }

        .booking-type-selector {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .booking-type-option {
          flex: 1;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
        }

        .booking-type-option:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .booking-type-option.active {
          border-color: var(--accent-color);
          background-color: rgba(59, 130, 246, 0.05);
          color: var(--accent-color);
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1),
            0 2px 4px -1px rgba(59, 130, 246, 0.06);
        }

        .booking-type-option span {
          font-weight: 500;
          font-size: 0.875rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .form-field {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .form-field:focus-within {
          background: #f1f5f9;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .field-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 10px;
          color: var(--accent-color);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .field-content {
          flex: 1;
        }

        .field-content label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
          font-size: 0.875rem;
        }

        .field-content select,
        .field-content input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.2s;
          background: white;
          color: #1f2937;
        }

        .field-content select:focus,
        .field-content input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .btn-secondary {
          padding: 0.875rem 1.75rem;
          background: #f3f4f6;
          color: #374151;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .btn-primary {
          padding: 0.875rem 1.75rem;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3),
            0 2px 4px -1px rgba(37, 99, 235, 0.2);
        }

        .btn-primary:hover {
          background: black;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3),
            0 4px 6px -2px rgba(37, 99, 235, 0.2);
          transform: translateY(-1px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .booking-type-selector {
            flex-direction: column;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </Modal>
  );
};

export default BookingDialog;
