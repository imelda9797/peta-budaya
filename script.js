const wilayah = [
    {
        id: "aceh", nama: "Aceh", x: 12.5, y: 27.5,
        deskripsi: "Aceh memiliki kekayaan budaya yang dikenal melalui rumah tradisional, seni tari, dan tradisi masyarakatnya.",
        budaya: [
            ["Rumah Adat", "Rumah Krong Bade", "Rumah tradisional Aceh berbentuk rumah panggung.", "assets/rumah_aceh.jpg"],
            ["Tarian", "Tari Saman", "Tarian berkelompok dengan gerakan kompak dan tepukan berirama.", "assets/tari_aceh.jpg"],
            ["Pakaian Adat", "Pakaian Adat Aceh", "Busana tradisional Aceh dengan hiasan dan perlengkapan khas.", "assets/pakaian_aceh.jpg"],
            ["Alat Musik", "Rapai", "Alat musik perkusi tradisional Aceh.", "assets/rapai_aceh.jpg"]
        ]
    },
    {
        id: "sumut", nama: "Sumatera Utara", x: 23.5, y: 34,
        deskripsi: "Sumatera Utara memiliki keberagaman budaya, salah satunya budaya masyarakat Batak.",
        budaya: [
            ["Rumah Adat", "Rumah Bolon", "Rumah tradisional masyarakat Batak.", "assets/rumah_sumut.jpg"],
            ["Kain Tradisional", "Ulos", "Kain tenun yang memiliki makna dalam upacara adat.", "assets/ulos_sumut.jpg"],
            ["Tarian", "Tari Tor-Tor", "Tarian tradisional masyarakat Batak.", "assets/tari_sumut.jpg"],
            ["Alat Musik", "Gondang", "Perangkat musik tradisional untuk mengiringi kegiatan adat.", "assets/musik_sumut.jpg"]
        ]
    },
    {
        id: "sumbar", nama: "Sumatera Barat", x: 26, y: 47,
        deskripsi: "Sumatera Barat dikenal dengan budaya Minangkabau yang memiliki ciri khas tersendiri.",
        budaya: [
            ["Rumah Adat", "Rumah Gadang", "Rumah tradisional dengan atap berbentuk gonjong.", "assets/rumah_sumbar.jpg"],
            ["Tarian", "Tari Piring", "Tarian tradisional menggunakan piring sebagai properti.", "assets/tari_sumbar.jpg"],
            ["Pakaian Adat", "Bundo Kanduang", "Busana adat perempuan Minangkabau.", "assets/pakaian_sumbar.jpg"],
            ["Alat Musik", "Saluang", "Alat musik tiup tradisional Minangkabau.", "assets/musik_sumbar.jpg"]
        ]
    },
    {
        id: "jabar", nama: "Jawa Barat", x: 35.5, y: 66,
        deskripsi: "Jawa Barat memiliki kekayaan budaya Sunda yang terkenal dengan seni musik dan tariannya.",
        budaya: [
            ["Alat Musik", "Angklung", "Alat musik bambu yang dimainkan dengan cara digoyangkan.", "assets/musik_jabar.jpeg"],
            ["Tarian", "Tari Jaipong", "Tarian khas Sunda dengan gerakan yang dinamis.", "assets/tari_jabar.jpeg"],
            ["Rumah Adat", "Rumah Jolopong", "Salah satu bentuk rumah tradisional masyarakat Sunda.", "assets/rumah_jabar.jpeg"],
            ["Pakaian Adat", "Pakaian Adat Sunda", "Busana tradisional khas masyarakat Sunda.", "assets/pakaian_jabar.jpeg"]
        ]
    },
    {
        id: "jateng", nama: "Jawa Tengah", x: 45, y: 66,
        deskripsi: "Jawa Tengah dikenal dengan budaya Jawa, seni pewayangan, dan bangunan tradisional.",
        budaya: [
            ["Rumah Adat", "Rumah Joglo", "Rumah tradisional Jawa dengan atap khas.", "assets/rumah_jateng.jpeg"],
            ["Seni Pertunjukan", "Wayang Kulit", "Pertunjukan boneka kulit dengan iringan gamelan.", "assets/seni_jateng.jpeg"],
            ["Pakaian Adat", "Jawi Jangkep", "Busana tradisional laki-laki Jawa.", "assets/pakaian_jateng.jpeg"],
            ["Alat Musik", "Gamelan", "Ansambel musik tradisional Jawa.", "assets/musik_jateng.jpeg"]
        ]
    },
    {
        id: "jakarta", nama: "DKI Jakarta", x: 39.5, y: 72,
        deskripsi: "Jakarta merupakan daerah asal budaya Betawi yang memiliki beragam kesenian tradisional.",
        budaya: [
            ["Seni Budaya", "Ondel-ondel", "Boneka besar khas Betawi yang digunakan dalam pertunjukan.", "assets/seni_jakarta.jpeg"],
            ["Rumah Adat", "Rumah Kebaya", "Rumah tradisional masyarakat Betawi.", "assets/rumah_jakarta.jpeg"],
            ["Pakaian Adat", "Sadariah", "Salah satu pakaian tradisional laki-laki Betawi.", "assets/pakaian_jakarta.jpeg"],
            ["Alat Musik", "Tanjidor", "Musik tradisional Betawi dengan alat musik tiup.", "assets/musik_jakarta.jpeg"]
        ]
    },
    {
        id: "yogyakarta", nama: "Yogyakarta", x: 49, y: 72,
        deskripsi: "Yogyakarta memiliki tradisi keraton, seni tari, dan kebudayaan Jawa yang kuat.",
        budaya: [
            ["Pakaian Adat", "Busana Adat Yogyakarta", "Busana tradisional yang berkembang dalam lingkungan keraton.", "assets/pakaian_jogja.jpeg"],
            ["Rumah Adat", "Rumah Joglo", "Bangunan tradisional dengan arsitektur Jawa.", "assets/rumah_jogja.jpeg"],
            ["Tarian", "Tari Bedhaya", "Tarian klasik yang berkembang di lingkungan keraton.", "assets/tari_jogja.jpeg"],
            ["Seni Pertunjukan", "Wayang Kulit", "Seni pertunjukan tradisional Jawa.", "assets/seni_jogja.jpeg"]
        ]
    },
    {
        id: "bali", nama: "Bali", x: 66, y: 73,
        deskripsi: "Bali terkenal dengan seni tari, arsitektur tradisional, dan upacara adatnya.",
        budaya: [
            ["Tarian", "Tari Pendet", "Tarian tradisional Bali yang dikenal sebagai tari penyambutan.", "assets/tari_bali.jpeg"],
            ["Rumah Adat", "Rumah Tradisional Bali", "Bangunan dengan tata ruang dan arsitektur khas Bali.", "assets/rumah_bali.jpeg"],
            ["Pakaian Adat", "Payas Bali", "Busana tradisional untuk berbagai kegiatan adat.", "assets/pakaian_bali.jpeg"],
            ["Alat Musik", "Gamelan Bali", "Ansambel musik tradisional Bali.", "assets/musik_bali.jpeg"]
        ]
    },
    {
        id: "ntt", nama: "Nusa Tenggara Timur", x: 77, y: 73,
        deskripsi: "Nusa Tenggara Timur memiliki kekayaan budaya berupa kain tenun, alat musik, dan tarian tradisional.",
        budaya: [
            ["Alat Musik", "Sasando", "Alat musik petik tradisional dari Pulau Rote.", "assets/musik_ntt.jpeg"],
            ["Kain Tradisional", "Tenun Ikat", "Kain tradisional dengan motif khas daerah.", "assets/kain_ntt.jpeg"],
            ["Rumah Adat", "Mbaru Niang", "Rumah adat berbentuk kerucut dari Wae Rebo.", "assets/rumah_ntt.jpeg"],
            ["Tarian", "Tari Caci", "Tradisi pertunjukan masyarakat Manggarai.", "assets/tari_ntt.jpeg"]
        ]
    },
    {
        id: "kalimantan", nama: "Kalimantan", x: 47, y: 43,
        deskripsi: "Kalimantan memiliki keberagaman budaya masyarakat Dayak dan kelompok masyarakat lainnya.",
        budaya: [
            ["Rumah Adat", "Rumah Betang", "Rumah panjang tradisional masyarakat Dayak.", "assets/rumah_kalimantan.jpeg"],
            ["Budaya", "Budaya Dayak", "Memiliki tradisi, bahasa, dan kerajinan yang beragam.", "assets/budaya_kalimantan.jpeg"],
            ["Pakaian Adat", "Pakaian Adat Dayak", "Busana tradisional dengan motif dan aksesori khas.", "assets/pakaian_kalimantan.jpeg"],
            ["Alat Musik", "Sape'", "Alat musik petik tradisional masyarakat Dayak.", "assets/musik_kalimantan.jpeg"]
        ]
    },
    {
        id: "sulsel", nama: "Sulawesi Selatan", x: 56, y: 46,
        deskripsi: "Sulawesi Selatan memiliki budaya Toraja, Bugis, Makassar, dan kelompok masyarakat lainnya.",
        budaya: [
            ["Rumah Adat", "Tongkonan", "Rumah tradisional masyarakat Toraja.", "assets/rumah_sulsel.jpeg"],
            ["Tarian", "Tari Pakarena", "Tarian tradisional masyarakat Gowa.", "assets/tarian_sulsel.jpeg"],
            ["Pakaian Adat", "Baju Bodo", "Busana tradisional perempuan Bugis-Makassar.", "assets/pakaian_sulsel.jpeg"],
            ["Kain Tradisional", "Tenun Toraja", "Kain tradisional dengan motif khas Toraja.", "assets/kain_sulsel.jpeg"]
        ]
    },
    {
        id: "maluku", nama: "Maluku", x: 72, y: 37,
        deskripsi: "Maluku memiliki budaya bahari, tarian tradisional, serta musik yang diwariskan turun-temurun.",
        budaya: [
            ["Tarian", "Tari Cakalele", "Tarian tradisional yang menjadi bagian budaya Maluku.", "assets/tarian_maluku.jpeg"],
            ["Alat Musik", "Tifa", "Alat musik pukul tradisional.", "assets/musik1_maluku.jpeg"],
            ["Rumah Adat", "Baileo", "Rumah adat untuk pertemuan dan kegiatan masyarakat.", "assets/rumah_maluku.jpeg"],
            ["Musik Tradisional", "Totobuang", "Alat musik tradisional berbentuk gong kecil.", "assets/musik_maluku.jpeg"]
        ]
    },
    {
        id: "papua", nama: "Papua", x: 87, y: 49,
        deskripsi: "Papua memiliki kekayaan budaya berupa rumah tradisional, alat musik, dan kerajinan.",
        budaya: [
            ["Rumah Adat", "Honai", "Rumah tradisional masyarakat pegunungan Papua.", "assets/rumah_papua.jpeg"],
            ["Alat Musik", "Tifa", "Alat musik pukul tradisional Papua.", "assets/musik_papua.jpeg"],
            ["Pakaian Adat", "Pakaian Adat Papua", "Busana tradisional yang beragam sesuai daerah.", "assets/pakaian_papua.jpeg"],
            ["Kerajinan", "Noken", "Tas tradisional Papua yang dibuat dengan teknik rajut atau anyam.", "assets/tas_papua.jpeg"]
        ]
    }
];

// Membuat tombol wilayah pada peta dan kartu wilayah
const tombolPeta = document.getElementById("tombolPeta");
const daftarWilayah = document.getElementById("daftarWilayah");

wilayah.forEach((daerah, index) => {
    const tombol = document.createElement("button");
    tombol.className = "pin";
    tombol.textContent = daerah.nama;
    tombol.style.left = daerah.x + "%";
    tombol.style.top = daerah.y + "%";
    tombol.style.setProperty("--urutan", index);
    tombol.setAttribute("aria-label", "Lihat budaya " + daerah.nama);
    tombol.addEventListener("click", () => bukaModal(daerah.id));
    tombolPeta.appendChild(tombol);

    const kartu = document.createElement("button");
    kartu.className = "kartu";
    kartu.style.setProperty("--urutan", index);
    kartu.innerHTML = `
        <div class="ikon">🌏</div>
        <span class="nomor-wilayah">WILAYAH ${String(index + 1).padStart(2, "0")}</span>
        <h3>${daerah.nama}</h3>
        <p>Yuk, kenali budayanya!</p>
        <span class="panah-kartu">Jelajahi budaya <span>→</span></span>
    `;
    kartu.addEventListener("click", () => bukaModal(daerah.id));
    daftarWilayah.appendChild(kartu);
});

// Membuka informasi budaya daerah
function bukaModal(id) {
    const daerah = wilayah.find(item => item.id === id);
    if (!daerah) return;

    document.getElementById("namaDaerah").textContent = daerah.nama;
    document.getElementById("deskripsiDaerah").textContent = daerah.deskripsi;

    const gambarDaerah = document.getElementById("gambarDaerah");
    if (gambarDaerah) {
        gambarDaerah.src = daerah.budaya[0][3];
        gambarDaerah.alt = daerah.budaya[0][1];
    }

    const galeri = document.getElementById("galeriBudaya");
    galeri.innerHTML = "";

    daerah.budaya.forEach((item, index) => {
        const kartuBudaya = document.createElement("div");
        kartuBudaya.className = "budaya";
        kartuBudaya.style.setProperty("--urutan", index);

        const foto = document.createElement("img");
        foto.className = "foto-budaya";
        foto.src = item[3];
        foto.alt = item[1];
        foto.loading = "lazy";

        foto.onerror = function () {
            this.style.display = "none";
        };

        const informasi = document.createElement("div");
        informasi.className = "informasi-budaya";

        const kategori = document.createElement("small");
        kategori.textContent = item[0];

        const nama = document.createElement("h4");
        nama.textContent = item[1];

        const deskripsi = document.createElement("p");
        deskripsi.textContent = item[2];

        informasi.append(kategori, nama, deskripsi);
        kartuBudaya.append(foto, informasi);
        galeri.appendChild(kartuBudaya);
    });

    const modal = document.getElementById("modal");
    modal.classList.add("aktif");
    document.body.style.overflow = "hidden";

    // Mengembalikan posisi popup ke bagian atas
    document.querySelector(".modal-box").scrollTop = 0;
    document.querySelector(".modal-box").focus();
}

// Menutup popup
function tutupModal() {
    document.getElementById("modal").classList.remove("aktif");
    document.body.style.overflow = "";
}

// Menutup popup dengan klik di luar kotak
document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) tutupModal();
});

// Menutup popup dengan tombol Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") tutupModal();
});
