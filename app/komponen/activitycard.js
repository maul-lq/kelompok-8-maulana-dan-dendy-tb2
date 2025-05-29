import Image from "next/image";

export default function ActivityCard({ image, title, description }) {
    return (
        <div style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Image 
                src={image} 
                alt={title} 
                width={300} 
                height={200} 
                style={{ objectFit: "cover" }} 
            />
            <div style={{
                padding: "15px",
                textAlign: "center"
            }}>
                <h3 style={{
                    fontSize: "1.25rem",
                    margin: "10px 0"
                }}>{title}</h3>
                <p style={{
                    fontSize: "1rem",
                    color: "#555"
                }}>{description}</p>
            </div>
        </div>
    );
}
