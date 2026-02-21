import React from "react";
import ImageCard from "../../../../components/ui/card";


export default function CardList(){
    return (
        <div style={containerstyle}>
            
            <ImageCard
            image= "https://d.ibtimes.co.uk/en/full/1579833/nasa-discovery-mission.webp?w=736&f=94749ff2b9e35cab30e9093a879ee9fb"
            title="Alone "
            description="A beautiful mountain landscape."
            />


            <ImageCard
            image= "https://d.ibtimes.co.uk/en/full/1579833/nasa-discovery-mission.webp?w=736&f=94749ff2b9e35cab30e9093a879ee9fb"
            title="Alone "
            description="A beautiful mountain landscape."
            />

            <ImageCard
            image= "https://d.ibtimes.co.uk/en/full/1579833/nasa-discovery-mission.webp?w=736&f=94749ff2b9e35cab30e9093a879ee9fb"
            title="Alone "
            description="A beautiful mountain landscape."
            />
        </div>
    )
}

const containerstyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px",
};