import Navbar from "../navbar";

export default function CampingGround() {
    return (
        <div className="page">
            <Navbar activeIndex={2} />
            <header className="header">
                <h1 className="header-title">Camping Ground</h1>
            </header>
            <main className="main">
                <p>Camping ground di gunung pancar.</p>
                <ul>
                    <li>Area camping yang luas</li>
                    <li>Fasilitas toilet dan tempat mandi</li>
                    <li>Tempat api unggun</li>
                    <li>Area parkir kendaraan</li>
                </ul>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Alam Raya Pancar</p>
            </footer>
        </div>
    );
}
