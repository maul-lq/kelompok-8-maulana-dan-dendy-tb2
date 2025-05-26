import Navbar from "../navbar";

export default function Aktifitas() {
    return (
        <div className="page">
            <Navbar activeIndex={1} />
            <header className="header">
                <h1 className="header-title">Aktifitas</h1>
            </header>
            <main className="main">
                <p>Aktifitas yang dilakukan di gunung pancar.</p>
                <ul>
                    <li>Mendaki gunung</li>
                    <li>Camping</li>
                    <li>Berfoto</li>
                    <li>Berenang di mata air</li>
                </ul>
            </main>
            <footer className="footer">
                <p>&copy; 2023 Alam Raya Pancar</p>
            </footer>
        </div>
    );
}