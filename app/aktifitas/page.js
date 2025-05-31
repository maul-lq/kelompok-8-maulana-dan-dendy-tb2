import Navbar from "../komponen/navbar";
import CoverImage from "../komponen/coverimage";
import ActivityCard from "../komponen/activitycard";
import ContactSection from "../komponen/contactSection";

export default function Aktifitas() {
    const activities = [
        { image: "/paket/camp.jpg", title: "Pancar Camp", description: "Rasakan pengalaman camping seru di tengah hutan pinus yang menenangkan!" },
        { image: "/paket/paint.jpg", title: "Paintball", description: "Uji strategi dan kekompakan tim dengan paintball seru di alam terbuka!" },
        { image: "/paket/outbondjpg.jpg", title: "Pancar Camp Fun Outbond", description: "Kembangkan teamwork dan leadership melalui aktivitas outbound dan camping seru di Gunung Pancar!" },
        { image: "/paket/onedayjpg.jpg", title: "Pancar Oneday", description: "Nikmati keindahan Gunung Pancar dalam satu hari penuh dengan berbagai aktivitas seru!" },
        { image: "/paket/onedayandoutbond.jpg", title: "Pancar Oneday Fun Outbond", description: "Sehari penuh dengan keseruan outbound dan petualangan alam di Gunung Pancar!" },
        { image: "/paket/shooting.jpg", title: "Shooting", description: "Abadikan momen spesial dengan latar belakang alam yang menakjubkan!" },
        { image: "/paket/tracking.jpg", title: "Tracking", description: "Susuri jalur tracking yang menantang dan nikmati keindahan alam Gunung Pancar!" },
        { image: "/paket/wedding.jpg", title: "Wedding", description: "Nikmati momen sakral dengan latar alam yang romantis di Gunung Pancar!" },
        { image: "/paket/ceria.jpg", title: "Camping Ceria", description: "Malam penuh canda tawa di bawah bintang, camping makin seru bareng teman dan keluarga!" },
        { image: "/paket/individu.jpg", title: "Camping Individu", description: "Camping di tengah alam yang damai di Gunung Pancar!" },
        { image: "/paket/ldks.jpg", title: "LDKS", description: "Asah kepemimpinan dan kerja sama tim di alam terbuka dengan LDKS di Gunung Pancar!" }
    ];

    return (
        <div className="page">
            <Navbar activeIndex={1} />
            <div style={{ width: "100%" }}>
                <CoverImage
                    imageURL="/kontak-kami.webp"
                    height="20vh"
                    topAtr=""
                    title="Aktifitas di Gunung Pancar"
                    bottomAtr="TWA Gunung Pancar menyediakan berbagai paket sesuai kebutuhan anda. Jika ingin info lebih jelas bisa menghubungi kontak kami."
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