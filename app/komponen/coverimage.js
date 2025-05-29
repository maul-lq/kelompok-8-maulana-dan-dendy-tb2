import Image from "next/image";
import styles from "./../page.module.css";

export default function displayCoverImg() {
    return (
        <div style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#00000033",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // gap: "20em"
        }}>
            <Image
                src="/bg-masthead.webp"
                alt="ikon"
                className={styles.bgimage}
                fill
                style={{ objectFit: "cover" }}
            />
            <div style={{
                maxWidth: "800px",
                textAlign: "center",
                padding: "0 20px",
            }}>
                <h2 style={{
                    color: "white",
                }}>
                    Selamat Datang di Website
                </h2>
                <h1 style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "3rem",
                    marginBlock: "1rem"
                }}>
                    Alam Raya Pancar
                </h1>
                <p style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textAlign: "justify"
                }}>
                    Taman Wisata Alam Gunung Pancar menyediakan keindahan alam 
                    pegunungan dengan hutan pinus yang rindang. Terletak hanya
                    beberapa jam dari Jakarta, kami menawarkan destinasi sempurna
                    bagi Anda yang ingin melepas penat dan kembali menyatu dengan alam.
                </p>
            </div>
        </div>
    );
}