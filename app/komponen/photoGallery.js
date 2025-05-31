"use client";

import Image from 'next/image';

export default function PhotoGallery() {
    const images = [
        "/tugas-besar-2/gal/camping.jpg",
        "/tugas-besar-2/gal/outbond.jpg",
        "/tugas-besar-2/gal/paintball.jpg",
        "/tugas-besar-2/gal/shooting.jpg",
        "/tugas-besar-2/gal/tracking.jpg",
        "/tugas-besar-2/gal/wedding.jpg",
    ];

    return (
        <div className="photo-gallery" style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "5px",
            backgroundColor: "var(--background)"
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
                        style={{ borderRadius: "8px" }}
                    />
                </div>
            ))}
            <style jsx>{`
                .photo-gallery {
                    transition: background 0.3s;
                }
                @media (max-width: 900px) {
                    .photo-gallery {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .photo-gallery {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
