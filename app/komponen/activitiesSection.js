"use client";

export default function ActivitiesSection() {
    const activities = [
        { icon: "🎒", title: "Camping", description: "Nikmati pengalaman berkemah di tengah alam yang asri dan sejuk." },
        { icon: "🚶", title: "Outbound", description: "Adakan kegiatan seru untuk rekan kerja, keluarga maupun teman." },
        { icon: "💍", title: "Wedding", description: "Pernikahan romantis dengan latar alam hutan pinus yang indah." },
        { icon: "📸", title: "Shooting", description: "Spot terbaik untuk sesi pemotretan dan pembuatan video." },
        { icon: "🌲", title: "Tracking", description: "Jelajahi keindahan alam dengan berbagai jalur tracking menarik." },
        { icon: "🧺", title: "Piknik", description: "Nikmati waktu santai bersama keluarga dan teman di alam terbuka." }
    ];

    return (
        <div style={{
            width: "100%",
            padding: "50px 20px",
            backgroundColor: "var(--background)",
            textAlign: "center"
        }}>
            <h2 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "var(--foreground)"
            }}>
                Aktivitas di Gunung Pancar
            </h2>
            <div style={{
                width: "100px",
                height: "4px",
                backgroundColor: "#2ecc71",
                margin: "0 auto 2rem"
            }}></div>
            <div className="activities-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px"
            }}>
                {activities.map((activity, index) => (
                    <div key={index} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "20px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        background: "var(--background)",
                        color: "var(--foreground)"
                    }}>
                        <div style={{
                            fontSize: "2.5rem",
                            color: "#2ecc71",
                            marginBottom: "10px"
                        }}>
                            {activity.icon}
                        </div>
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "10px"
                        }}>
                            {activity.title}
                        </h3>
                        <p style={{
                            fontSize: "1rem",
                            color: "var(--foreground)"
                        }}>
                            {activity.description}
                        </p>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .activities-grid {
                    transition: background 0.3s;
                }
                @media (max-width: 900px) {
                    .activities-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .activities-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
