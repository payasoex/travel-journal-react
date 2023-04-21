import React from "react";

function Journal(props) {
    return (
        <div className="journal">
            <div className="journal--container">
                <img src={props.imageUrl} className="journal--img"/>
                <div>
                    <div className="journal--location">
                        <img src="src/assets/img/location-icon.svg" className="journal--location-icon"/>
                        <p className="journal--location-text">{props.location}</p>
                        <a href={props.googleMapsUrl}className="journal--location-link">
                            <p className="journal--location-link-text">View on Google Maps</p>
                        </a>
                    </div>
                    <h2 className="journal--title">{props.title}</h2>
                    <p className="journal--date">{props.startDate} - {props.endDate}</p>
                    <p className="journal--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Journal