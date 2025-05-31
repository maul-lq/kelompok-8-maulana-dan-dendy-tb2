import Navbar from "../komponen/navbar";
import CoverImage from "../komponen/coverimage";
import ActivityCard from "../komponen/activitycard";
import ContactSection from "../komponen/contactSection";

export default function Aktifitas() {
    const activities = [
        { image: "/tugas-besar-2/paket/camp.jpg", title: "Pancar Camp", description: "Rasakan pengalaman camping seru di tengah hutan pinus yang menenangkan!" },
        { image: "/tugas-besar-2/paket/paint.jpg", title: "Paintball", description: "Uji strategi dan kekompakan tim dengan paintball seru di alam terbuka!" },
        { image: "/tugas-besar-2/paket/outbondjpg.jpg", title: "Pancar Camp Fun Outbond", description: "Kembangkan teamwork dan leadership melalui aktivitas outbound dan camping seru di Gunung Pancar!" },
        { image: "/tugas-besar-2/paket/onedayjpg.jpg", title: "Pancar Oneday", description: "Nikmati keindahan Gunung Pancar dalam satu hari penuh dengan berbagai aktivitas seru!" },
        { image: "/tugas-besar-2/paket/onedayandoutbond.jpg", title: "Pancar Oneday Fun Outbond", description: "Sehari penuh dengan keseruan outbound dan petualangan alam di Gunung Pancar!" },
        { image: "/tugas-besar-2/paket/shooting.jpg", title: "Shooting", description: "Abadikan momen spesial dengan latar belakang alam yang menakjubkan!" },
        { image: "/tugas-besar-2/paket/tracking.jpg", title: "Tracking", description: "Susuri jalur tracking yang menantang dan nikmati keindahan alam Gunung Pancar!" },
        { image: "/tugas-besar-2/paket/wedding.jpg", title: "Wedding", description: "Nikmati momen sakral dengan latar alam yang romantis di Gunung Pancar!" },
        { image: "/tugas-besar-2/paket/ceria.jpg", title: "Camping Ceria", description: "Malam penuh canda tawa di bawah bintang, camping makin seru bareng teman dan keluarga!" },
        { image: "/tugas-besar-2/paket/individu.jpg", title: "Camping Individu", description: "Camping di tengah alam yang damai di Gunung Pancar!" },
        { image: "/tugas-besar-2/paket/ldks.jpg", title: "LDKS", description: "Asah kepemimpinan dan kerja sama tim di alam terbuka dengan LDKS di Gunung Pancar!" }
    ];

    return (
        <div className="page">
            <Navbar activeIndex={1} />
            <CoverImage
                imageURL="/tugas-besar-2/kontak-kami.webp"
                height="20vh"
                topAtr=""
                title="Aktifitas di Gunung Pancar"
                bottomAtr="TWA Gunung Pancar menyediakan berbagai paket sesuai kebutuhan anda. Jika ingin info lebih jelas bisa menghubungi kontak kami."
            />
            <div className="activities-container" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px",
                backgroundColor: "#fafafa"
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
            <ContactSection />
        </div>
    );
}