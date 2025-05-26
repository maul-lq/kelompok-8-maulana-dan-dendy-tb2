import Navbar from "../navbar";

export default function Contacts() {
    return (
        <div className="page">
            <Navbar activeIndex={3} />
            <header className="header">
                <h1 className="header-title">Kontak</h1>
            </header>
            <main className="main">
                <p>Hubungi kami untuk informasi lebih lanjut.</p>
                <ul>
                    <li>Email: <a href="mailto:info@alamrayapancar.com">info@alamrayapancar.com</a></li>
                </ul>
            </main>
        </div>
    );
}