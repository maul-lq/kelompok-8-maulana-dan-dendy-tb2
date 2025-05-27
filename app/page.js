import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar activeIndex={0}/>
      <div className={styles.bgimage}></div>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
