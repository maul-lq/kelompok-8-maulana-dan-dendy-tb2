"use client";
import Image from "next/image";
import styles from "./../page.module.css";

export default function CoverImage({ imageURL, height = "100vh", topAtr = "Selamat Datang di Website", title = "Alam Raya Pancar", bottomAtr = "Taman Wisata Alam Gunung Pancar menyediakan keindahan alam pegunungan dengan hutan pinus yang rindang. Terletak hanya beberapa jam dari Jakarta, kami menawarkan destinasi sempurna bagi Anda yang ingin melepas penat dan kembali menyatu dengan alam." }) {
    if (!imageURL) {
        imageURL = "/bg-masthead.webp";
    }
    return (
        <div className="cover-image" style={{
            position: "relative",
            width: "100%",
            height: height,
            textAlign: "center",
            backgroundColor: "#00000033",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image
                src={imageURL}
                alt="ikon"
                className={styles.bgimage}
                fill
                style={{ objectFit: "cover", filter: "brightness(0.7)" }}
            />
            <div style={{
                maxWidth: "800px",
                textAlign: "center",
                padding: "0 20px",
                position: "relative",
                zIndex: 2
            }}>
                <h2 style={{
                    color: "white",
                    marginTop: "2em"
                }}>
                    {topAtr}
                </h2>
                <h1 style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "3rem",
                    marginBlock: "1rem"
                }}>
                    {title}
                </h1>
                <p style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textAlign: "justify"
                }}>
                    {bottomAtr}
                </p>
            </div>
            <style jsx>{`
                .cover-image {
                    min-height: 200px;
                }
                @media (max-width: 900px) {
                    .cover-image {
                        height: 35vh !important;
                    }
                    h1 {
                        font-size: 2rem !important;
                    }
                    h2 {
                        font-size: 1.2rem !important;
                    }
                    p {
                        font-size: 1rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .cover-image {
                        height: 25vh !important;
                    }
                    h1 {
                        font-size: 1.2rem !important;
                    }
                    h2 {
                        font-size: 1rem !important;
                    }
                    p {
                        font-size: 0.95rem !important;
                    }
                }
            `}</style>
        </div>
    );
}