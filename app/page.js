import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./komponen/navbar";
import displayCoverImg from "./komponen/coverimage";
import TempatKonetenTeks from "./komponen/tempatKontenTeks";
import PhotoGallery from "./komponen/photoGallery";
import ActivitiesSection from "./komponen/activitiesSection";
import ContactSection from "./komponen/contactSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar activeIndex={0} />
      {displayCoverImg()}
      <TempatKonetenTeks />
      <PhotoGallery />
      <ActivitiesSection />
      <ContactSection />
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}


