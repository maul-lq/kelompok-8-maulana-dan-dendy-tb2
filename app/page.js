import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./komponen/navbar";
import CoverImage from "./komponen/coverimage";
import TempatKonetenTeks from "./komponen/tempatKontenTeks";
import PhotoGallery from "./komponen/photoGallery";
import ActivitiesSection from "./komponen/activitiesSection";
import ContactSection from "./komponen/contactSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar activeIndex={0} />
      <div style={{ width: "100%" }}>
        <CoverImage />
      </div>
      <div style={{ width: "100%", background: "var(--content-bg-1)" }}>
        <TempatKonetenTeks />
      </div>
      <div style={{ width: "100%", background: "var(--content-bg-2)" }}>
        <PhotoGallery />
      </div>
      <div style={{ width: "100%", background: "var(--content-bg-1)" }}>
        <ActivitiesSection />
      </div>
      <div style={{ width: "100%", background: "var(--primary)" }}>
        <ContactSection />
      </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}


