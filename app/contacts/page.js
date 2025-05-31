import Navbar from "../komponen/navbar";
import CoverImage from "../komponen/coverimage";
import TempatKonetenTeks from "../komponen/tempatKontenTeks";
import ContactSection from "../komponen/contactSection";

export default function Contacts() {
    return (
        <div className="page">
            <Navbar activeIndex={3} />
            <CoverImage
                imageURL="/tugas-besar-2/kontak-kami.webp"
                height="35vh"
                topAtr=""
                title="Hubungi Kami"
                bottomAtr="Taman Wisata Alam Gunung Pancar mempunyai lokasi yang terjangkau yang tidak memakan waktu lama dari Jakarta. Anda bisa menghubungi nomor whatsapp kami untuk meminta informasi lebih lanjut."
            />
            <TempatKonetenTeks
                title="Temukan Kami"
                desc="PT Wana Wisata Indah terletak di Taman Wisata Alam Gunung Pancar (TWA-GP), yang mudah dijangkau dari Jakarta dengan jalur darat melalui Tol Jagorawi. Pengunjung dapat keluar di pintu Tol Sentul Selatan, kemudian melanjutkan perjalanan menuju Kecamatan Babakan Madang dan Desa Karang Tengah dengan jarak sekitar 11 km. Selain itu, lokasi kami juga dapat diakses dari kota Bogor dengan melewati daerah Bogor Baru, Desa Cijayanti, Kecamatan Babakan Madang, dan Desa Karang Tengah dengan jarak sekitar 25 km."
                addr=""
            />
            <ContactSection />
        </div>
    );
}