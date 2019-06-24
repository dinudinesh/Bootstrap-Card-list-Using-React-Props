import React from "react";
function ContactCard(props) {
  console.log(props.cardContent.cardClass);
  return (
    <div
      className={`card text-white mb-3 col-md-4 ${props.cardContent.cardClass}`}
    >
      <div className="card-header">{props.cardContent.headerName}</div>
      <div className="card-body">
        <h5 className="card-title">{props.cardContent.cardTitle}</h5>
        <p className="card-text">{props.cardContent.cardText}</p>
      </div>
    </div>
  );
}

export default ContactCard;
