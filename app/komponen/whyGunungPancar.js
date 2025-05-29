export default function WhyGunungPancar() {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 20px",
            textAlign: "center",
            backgroundColor: "white",
        }}>
            <h2 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#000"
            }}>
                Kenapa Harus Gunung Pancar?
            </h2>
            <div style={{
                width: "100px",
                height: "4px",
                backgroundColor: "#2ecc71",
                margin: "0 auto 1.5rem",
            }}></div>
            <p style={{
                maxWidth: "800px",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#333",
                marginBottom: "2rem",
            }}>
                Di sini, Anda bisa merasakan ketenangan yang jarang ditemukan di tempat lain. 
                Udara segar, suara gemericik air, dan hijaunya pepohonan akan menyambut Anda 
                sejak pertama kali menginjakkan kaki. Taman Wisata Alam Gunung Pancar menyediakan 
                berbagai fasilitas, mulai dari camping ground, jalur trekking, hingga tempat 
                berendam di pemandian air panas alami.
            </p>
            <a style={{
                backgroundColor: "#2ecc71",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }} href="/camp_ground">
                LIHAT PAKET &gt;
            </a>
        </div>
    );
}
