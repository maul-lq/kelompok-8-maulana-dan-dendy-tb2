"use client";
import Link from "next/link";
import Image from "next/image";
import style from "./../style/navbar.module.css";
import { useState } from "react";

export default function Navbar({ activeIndex }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.navbar}>
            <header className={style.header}>
                <div className={style.navbarContent}>
                    <div className={style.logoTitle}>
                        <Image style={{ borderRadius: "100%" }} src="/tugas-besar-2/gambar.jpeg" alt="ikon" className={style.headerImg} width={65} height={65} />
                        <h1 className={style.headerTitle}>Tempat Wisata Alam</h1>
                    </div>
                    <nav className={style.nav}>
                        <button
                            className="menu-toggle"
                            aria-label="Toggle menu"
                            onClick={() => setOpen(!open)}
                            style={{
                                display: "none",
                                background: "none",
                                border: "none",
                                fontSize: "2rem",
                                color: "var(--foreground)",
                                cursor: "pointer",
                                marginLeft: "10px"
                            }}
                        >☰</button>
                        <ul className={open ? "open" : ""}>
                            <li><Link className={activeIndex === 0 ? style.active : ''} href="/">Home</Link></li>
                            <li><Link className={activeIndex === 1 ? style.active : ''} href="/aktifitas">Pilihan Aktifitas</Link></li>
                            <li><Link className={activeIndex === 2 ? style.active : ''} href="/camp_ground">Camp Ground</Link></li>
                            <li><Link className={activeIndex === 3 ? style.active : ''} href="/contacts">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <style jsx>{`
                nav ul {
                    transition: background 0.3s, color 0.3s;
                }
                @media (max-width: 900px) {
                    nav ul {
                        flex-direction: column;
                        position: absolute;
                        top: 70px;
                        right: 0;
                        background: rgba(30,30,30,0.85);
                        width: 200px;
                        display: none;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        z-index: 1001;
                    }
                    nav ul.open {
                        display: flex;
                    }
                    .menu-toggle {
                        display: block !important;
                    }
                }
                @media (max-width: 600px) {
                    .${style.headerTitle} {
                        font-size: 1.1rem;
                    }
                    nav ul {
                        width: 100vw;
                        right: 0;
                        top: 60px;
                        padding: 0;
                    }
                }
            `}</style>
        </div >
    );
}