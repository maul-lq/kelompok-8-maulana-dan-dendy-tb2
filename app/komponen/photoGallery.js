import Image from 'next/image';

export default function PhotoGallery() {
    const images = [
        "/gal/camping.jpg",
        "/gal/outbond.jpg",
        "/gal/paintball.jpg",
        "/gal/shooting.jpg",
        "/gal/tracking.jpg",
        "/gal/wedding.jpg",
    ];

    return (
        <div style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "5px",
            backgroundColor: "#f9f9f9"
        }}>
            {images.map((src, index) => (
                <div key={index} style={{
                    width: "100%",
                    height: "auto"
                }}>
                    <Image
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        layout="responsive"
                        width={500}
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
}
