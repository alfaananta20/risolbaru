const tombol = document.getElementById("pesanbtn");

console.log(tombol);

tombol.addEventListener("click", function() {
    const nama = document.getElementById("nama").value;
    const nomor = document.getElementById("nomor").value;
    const alamat = document.getElementById("alamat").value;
    const mayo = document.getElementById("mayo").value;
    const coklat = document.getElementById("coklat").value;
    const rogout = document.getElementById("rogout").value;
    const matcha = document.getElementById("matcha").value;
    const tiramisu = document.getElementById("tiramisu").value;
    const margo = document.getElementById("margo").value;
    const catatan = document.getElementById("catatan").value;

    let daftarpesanan = ""

    if (mayo > 0) {
        daftarpesanan += "-Risol Mayo: " + mayo + "\n"
    }

    if (coklat > 0) {
        daftarpesanan += "-Risol Coklat: " + coklat + "\n"
    }

    if (rogout > 0) {
        daftarpesanan += "-Risol Rogout: " + rogout + "\n"
    }

    if (matcha > 0) {
        daftarpesanan += "-Risol Matcha: " + matcha + "\n"
    }

    if (tiramisu > 0) {
        daftarpesanan += "-Risol Tiramisu: " + tiramisu + "\n"
    }

    if (margo > 0) {
        daftarpesanan += "-Risol Margo: " + margo + "\n"
    }

    if (nama === ""){
        alert("Nama harus diisi!")
        return;
    }

    if (nomor === ""){
        alert("Nomor harus diisi!")
        return;
    }

    if (alamat === ""){
        alert("Alamat harus diisi!")
        return;
    }

    if (
        mayo == 0 &&
        coklat == 0 &&
        rogout == 0 &&
        matcha == 0 &&
        tiramisu == 0 &&
        margo == 0 
    ) {
        alert("Pilih minimal 1 Produk!")
        return;
    }

    const pesan = 
    "Nama: " + nama +
    "\nNomor: " + nomor +
    "\nAlamat: " + alamat +
    "\n\n Pesanan:\n" +
    daftarpesanan +
    "\nCatatan: " + catatan
    alert(pesan);

    const nomortujuan = "6288215520827";

    const link = `https://wa.me/${nomortujuan}?text=${encodeURIComponent(pesan)}`

    window.open(link, "_blank");
});

const menutoggle = document.getElementById("menutoggle");
const navbar = document.getElementById("navbar");

menutoggle.addEventListener("click", function(){
    navbar.classList.toggle("active");
})