import Link from "next/link";
import Image from "next/image";
import style from "./../style/navbar.module.css";

export default function Navbar({ activeIndex }) {
    return (
        <div className={style.navbar}>
            <header className={style.header}>
                <div className={style.navbarContent}>
                    <div className={style.logoTitle}>
                        <Image style={{ borderRadius: "100%" }} src="/tugas-besar-2/gambar.jpeg" alt="ikon" className={style.headerImg} width={65} height={65} />
                        <h1 className={style.headerTitle}>Tempat Wisata Alam</h1>
                    </div>
                    <nav className={style.nav}>
                        <ul>
                            <li><Link className={activeIndex === 0 ? style.active : ''} href="/">Home</Link></li>
                            <li><Link className={activeIndex === 1 ? style.active : ''} href="/aktifitas">Pilihan Aktifitas</Link></li>
                            <li><Link className={activeIndex === 2 ? style.active : ''} href="/camp_ground">Camp Ground</Link></li>
                            <li><Link className={activeIndex === 3 ? style.active : ''} href="/contacts">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    );
}