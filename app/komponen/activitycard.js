"use client";

import Image from "next/image";

export default function ActivityCard({ image, title, description, width }) {
    if (!width) {
        width = "300px";
    }
    return (
        <div
            style={{
                width: "100%",
                maxWidth: width,
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "var(--background)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 auto"
            }}
        >
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                style={{ objectFit: "cover", width: "100%", height: "auto", maxHeight: "220px" }}
            />
            <div
                style={{
                    padding: "15px",
                    textAlign: "center"
                }}
            >
                <h3
                    style={{
                        fontSize: "1.25rem",
                        margin: "10px 0",
                        color: "var(--foreground)"
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "var(--foreground)"
                    }}
                >
                    {description}
                </p>
            </div>
            <style jsx>{`
                div {
                    transition: background 0.3s, color 0.3s;
                }
                @media (max-width: 900px) {
                    div {
                        max-width: 95vw;
                    }
                }
                @media (max-width: 600px) {
                    div {
                        max-width: 100vw;
                    }
                    h3 {
                        font-size: 1.1rem;
                    }
                    p {
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </div>
    );
}
