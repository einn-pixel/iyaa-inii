alert("JS jalan");
console.log("JS jalan");

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

form.addEventListener("submit", function(e){
    alert("form diklik");
    console.log("input value:", input.value);

    e.preventDefault();

    let kota = input.value.trim().toLowerCase();

    if(kota === "seattle"){
        fetch("/api/seattle")
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `
            <div style="background:white;color:black;padding:20px;margin-top:20px;border-radius:10px;max-width:600px;box-shadow:0 4px 10px rgba(0,0,0,0.1)">
            <h2>${data.nama_kota}</h2>
            <p><b>Negara:</b> ${data.negara}</p>
            <p><b>Negara Bagian:</b> ${data.negara_bagian}</p>
            <p><b>Luas Kota:</b> ${data.luas_kota}</p>
            <p><b>Jumlah Penduduk:</b> ${data.jumlah_penduduk}</p>
            <p><b>Tahun Didirikan:</b> ${data.tahun_didirikan}</p>
            <p><b>Julukan Kota:</b> ${data.julukan}</p>
            <p><b>Iklim:</b> ${data.iklim}</p>
            <p><b>Tempat Wisata:</b> ${data.tempat_wisata}</p>
            <p><b>Universitas:</b> ${data.universitas}</p>
            </div>
            `;
        })
        .catch(err => {
            result.innerHTML = "<p style='color:red'>Error mengambil data</p>";
            console.error(err);
        });
    } else {
        result.innerHTML = "<p style='color:red'>Data kota tidak ditemukan</p>";
    }
});