import React, { useState } from "react";
import ImageCard from "../../../../components/ui/card";

const cars = [
    {
        id: 1,
        brand: "Lamborghini",
        name: "Huracan EVO",
        year: "2023",
        power: "640 HP",
        mileage: "1,200 mi",
        price: "$248,000",
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80"
    },
    {
        id: 2,
        brand: "Ferrari",
        name: "SF90 Stradale",
        year: "2023",
        power: "986 HP",
        mileage: "800 mi",
        price: "$507,000",
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&q=80"
    },
    {
        id: 3,
        brand: "Porsche",
        name: "911 GT3 RS",
        year: "2022",
        power: "518 HP",
        mileage: "4,100 mi",
        price: "$195,000",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
    },
    {
        id: 4,
        brand: "BMW",
        name: "M5 Competition",
        year: "2023",
        power: "617 HP",
        mileage: "2,300 mi",
        price: "$112,000",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
    },
    {
        id: 5,
        brand: "Mercedes",
        name: "AMG GT Black",
        year: "2022",
        power: "720 HP",
        mileage: "3,700 mi",
        price: "$330,000",
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80"
    },
    {
        id: 6,
        brand: "McLaren",
        name: "720S Spider",
        year: "2021",
        power: "710 HP",
        mileage: "8,400 mi",
        price: "$299,000",
        image: "https://www.ilusso.com/imagetag/5409/main/l/Used-2020-McLaren-720S-Spider-Performance-1767737574.jpg?1772199789"
    },
];

const tabs = ["All", "New", "Sale", "Sports", "Luxury"];

export default function CardList() {
    const [activeTab, setActiveTab] = useState("All");

    const filtered = activeTab === "All" ? cars
        : activeTab === "New"    ? cars.filter(c => c.badge === "NEW")
        : activeTab === "Sale"   ? cars.filter(c => c.badge === "SALE")
        : activeTab === "Sports" ? cars.filter(c => ["Lamborghini", "Ferrari", "Porsche", "McLaren"].includes(c.brand))
        : cars.filter(c => ["Mercedes", "BMW"].includes(c.brand));

    return (
        <div>
            {/* Tabs */}
            <div style={tabsContainer}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={activeTab === tab ? activeTab2 : tabBtn}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div style={cardsContainer}>
                {filtered.map(car => (
                    <ImageCard key={car.id} {...car} />
                ))}
            </div>
        </div>
    );
}

const tabsContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "28px",
    padding: "0 20px",
};

const tabBtn = {
    background: "#fff",
    border: "1px solid #ddd",
    color: "#888",
    padding: "7px 18px",
    borderRadius: "4px",
    fontSize: "13px",
    cursor: "pointer",
    fontFamily: "inherit",
};

const activeTab2 = {
    ...tabBtn,
    background: "#e74c3c",
    border: "1px solid #e74c3c",
    color: "#fff",
};

const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "0 20px",
};