import Link from "next/link";
import Image from "next/image";
import style from "./navbar.module.css";

export default function Navbar({ activeIndex }) {
    return (
        <div className={style.navbar}>
            <header className={style.header}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h1 className={style.headerTitle}>
                                    <Image src="favicon.svg" alt="ikon" className={style.headerImg} width={65} height={65} />RFz - Halaman Utama
                                </h1>
                            </td>
                            <td>
                                <nav className={style.nav}>
                                    <ul>
                                        <li><Link className={activeIndex === 0 ? style.active : ''} href="index.html">Beranda</Link></li>
                                        <li><Link className={activeIndex === 1 ? style.active : ''} href="personal.html">Informasi Personal</Link></li>
                                        <li><Link className={activeIndex === 2 ? style.active : ''} href="keluarga.html">Informasi Keluarga</Link></li>
                                        <li><Link className={activeIndex === 3 ? style.active : ''} href="teman.html">Informasi Teman</Link></li>
                                        <li><Link className={activeIndex === 4 ? style.active : ''} href="hobi.html">Informasi Hobi</Link></li>
                                    </ul>
                                </nav>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </header>
        </div>
    );
}