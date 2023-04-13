import React from 'react';

const ServicesCard = ({ data }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">Services</div>
      <div className="card-body bg-dark">
        {Object.keys(data).map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
