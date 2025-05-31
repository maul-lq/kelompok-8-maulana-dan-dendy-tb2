import Navbar from "../komponen/navbar";
import CoverImage from "../komponen/coverimage";
import ActivityCard from "../komponen/activitycard";
import ContactSection from "../komponen/contactSection";

export default function CampingGround() {
    const activities = [
        { image: "/camp/hijau.jpg", title: "Bukit Batu Hijau (Ground A)", description: "Nikmati pemandangan indah dari Bukit Batu Hijau, salah satu lokasi terbaik di Gunung Pancar dengan udara segar menjadi tempat yang sempurna untuk anda." },
        { image: "/camp/gede.jpg", title: "Bukit Batu Gede (Ground B)", description: "Keindahan Bukit Batu Gede yang menakjubkan, lokasi ideal untuk aktivitas luar ruangan memberikan pengalaman yang luar biasa di tengah alam yang asri." },
        { image: "/camp/lembahh.jpg", title: "Lembah Hijau (Ground C)", description: "Bersantai dan nikmati suasana alam yang damai di Lembah Hijau dengan pepohonan hijau yang rimbun dan pemandangan yang menenangkan." },
        { image: "/camp/lembahp.jpg", title: "Lembah Pakis (Ground D)", description: "Suasana lembah Pakis dengan pepohonan hijau menawarkan tempat yang tenang untuk menikmati keindahan alam." },
        { image: "/camp/pandan.jpg", title: "Bukit Batu Pandan (Ground F)", description: "Temukan pemandangan indah di Bukit Batu Pandan dengan panorama luas yang memukau di alam yang mempesona." },
        { image: "/camp/gajah.jpg", title: "Bukit Batu Gajah (Ground G)", description: "Bukit Batu Gajah dengan udara segar dan pemandangan menakjubkan tempat sempurna untuk menikmati panorama alam yang luas." }
    ];
    return (
        <div className="page">
            <Navbar activeIndex={2} />
            <div style={{ width: "100%" }}>
                <CoverImage
                    imageURL="/kontak-kami.webp"
                    height="30vh"
                    topAtr=""
                    title="Camping Ground Wisata Gunung Pancar"
                    bottomAtr="TWA Gunung Pancar memiliki berbagai macam camping ground dengan suasana berbeda. Jika ingin info lebih jelas bisa menghubungi kontak kami."
                />
            </div>
            <div style={{ width: "100%", background: "var(--content-bg-1)" }}>
                <div className="activities-container" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "20px",
                    backgroundColor: "transparent"
                }}>
                    {activities.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            image={activity.image}
                            title={activity.title}
                            description={activity.description}
                            width="500px"
                        />
                    ))}
                </div>
            </div>
            <div style={{ width: "100%", background: "var(--primary)" }}>
                <ContactSection />
            </div>
        </div>
    );
}
