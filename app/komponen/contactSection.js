import Image from "next/image";

export default function ContactSection() {
    return (
        <div style={{
            position: "relative",
            width: "100%",
            padding: "50px 20px",
            backgroundColor: "#ffffff"
        }}>
            <Image
                src="/kontak-kami.webp"
                alt="Background"
                fill
                style={{
                    objectFit: "cover",
                    zIndex: -1,
                    position: "absolute"
                }}
            />
            <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        color: "#2ecc71",
                        marginBottom: "1rem"
                    }}>
                        Hubungi Kami
                    </h2>
                    <h3 style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem"
                    }}>
                        Base Camp & Reservation
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                        TWA Gunung Pancar, Kp. Ciburial RT. 3/3<br />
                        Desa Karang Tengah Kec. Babakan Madang<br />
                        Kabupaten Bogor 16810 – Jawa Barat
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        📞 0812 8574 5247 – Widiyanto<br />
                        📞 0813 8113 0779 – Fani<br />
                        ✉️ marketing.gunungpancar@gmail.com
                    </p>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem"
                    }}>
                        Head Office
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                        PT. Wana Wisata Indah<br />
                        Midplaza I Lt. 10, Jl. Jend. Sudirman Kav. 10-11<br />
                        Jakarta 10220
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        📞 021-5790 5519 / 5790 5520
                    </p>
                </div>
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <h2 style={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        color: "#2ecc71",
                        marginBottom: "1rem"
                    }}>
                        Lokasi Kami
                    </h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.7661043030967!2d106.90239505649703!3d-6.580561798346351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7791e515175%3A0x3f7386a4724f7630!2sPancar%20Mountain%20Natural%20Park!5e0!3m2!1sen!2sid!4v1732338868669!5m2!1sen!2sid"
                        width="100%"
                        height="200"
                        style={{
                            border: "none",
                            borderRadius: "8px"
                        }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
