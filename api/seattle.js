export default function handler(req, res) {

const dataSeattle = {

nama_kota: "Seattle",
negara: "Amerika Serikat",
negara_bagian: "Washington",
luas_kota: "369 km²",
jumlah_penduduk: "816600",
tahun_didirikan: "1851",
julukan: "Emerald City",
iklim: "Oceanic",
tempat_wisata: "Space Needle",
universitas: "University of Washington"

}

res.status(200).json(dataSeattle)

}