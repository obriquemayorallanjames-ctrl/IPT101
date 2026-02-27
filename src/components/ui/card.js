import React from "react";
import "./card.css";

export default function ImageCard({ image, brand, name, year, power, mileage, price, badge }) {
    return (
        <div className="car-card">
            <img src={image} alt={name} />
            <div className="car-card-body">
                <div className="car-card-brand">{brand}</div>
                <div className="car-card-name">{name}</div>
                <div className="car-card-specs">
                    <div className="car-spec">Year <span>{year}</span></div>
                    <div className="car-spec">Power <span>{power}</span></div>
                    <div className="car-spec">Miles <span>{mileage}</span></div>
                </div>
                <div className="car-card-footer">
                    <span className="car-price">{price}</span>
                    {badge
                        ? <span className="car-badge">{badge}</span>
                        : <button className="car-btn">View Car</button>
                    }
                </div>
            </div>
        </div>
    );
}