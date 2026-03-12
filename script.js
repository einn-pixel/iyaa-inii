const form = document.getElementById("searchForm")
const input = document.getElementById("searchInput")
const result = document.getElementById("result")

form.addEventListener("submit", function(e){

e.preventDefault()

let kota = input.value.trim().toLowerCase()

if(kota === "seattle"){

fetch("/api/seattle")
.then(response => response.json())
.then(data => {

result.innerHTML = `
<div style="background:white;color:black;padding:20px;margin-top:20px;border-radius:10px">
<h2>${data.nama_kota}</h2>
<p>Negara: ${data.negara}</p>
<p>Negara Bagian: ${data.negara_bagian}</p>
<p>Luas Kota: ${data.luas_kota}</p>
<p>Jumlah Penduduk: ${data.jumlah_penduduk}</p>
<p>Tahun Didirikan: ${data.tahun_didirikan}</p>
<p>Julukan Kota: ${data.julukan}</p>
<p>Iklim: ${data.iklim}</p>
<p>Tempat Wisata: ${data.tempat_wisata}</p>
<p>Universitas: ${data.universitas}</p>
</div>
`

})

}else{

result.innerHTML = "<p>Data kota tidak ditemukan</p>"

}

})