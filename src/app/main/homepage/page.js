import CardList from "./components/cardlist";


export default function HomePage() {
    return (
        <main>
            <h1 style={{ textAlign: "center", marginTop: "20px"}}>
                Image Card gallery
            </h1>

            <CardList/>

        </main>
    )
}