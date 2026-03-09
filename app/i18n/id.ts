import type { Translations } from "./en";

const id: Translations = {
  nav: {
    about: "Tentang Kami",
    management: "Manajemen",
    business: "Bisnis Kami",
    milestone: "Pencapaian",
    legality: "Legalitas",
    contact: "Hubungi Kami",
  },
  hero: {
    eyebrow: "SELAMAT DATANG DI PT SBS",
    title1: "Menggerakkan",
    title2: "Perdagangan Komoditas",
    subtitle:
      "Produksi, pengolahan, dan perdagangan batubara, biomassa, nikel, dan silika — menghubungkan sumber daya alam Indonesia dengan kebutuhan industri lokal dan global.",
    cta: "Pelajari Lebih Lanjut",
  },
  about: {
    sectionLabel: "PROFIL PERUSAHAAN",
    heading: "Tentang Kami",
    p1: "PT. Surya Berkat Semesta (SBS) adalah Perusahaan yang bergerak dalam bidang Produksi, Pengolahan Perdagangan dan Jual-Beli dan telah berizin yang meliputi beberapa komoditas dan industri diantaranya batubara, mineral logam, mineral non-logam, gas alam padat dan cair, semen, kapur, pasir & juga batu YBDI. Industri Penggergajian Kayu, Industri Partikel Kayu dan Sejenisnya serta Industri Kayu Bakar dan Pelet Kayu.",
    p2: "SBS didirikan dengan semangat dan kerjasama yang telah dibekali manajemen dan team yang memiliki lebih dari <strong>20 tahun pengalaman</strong> dengan extensive knowledge & portfolio dalam mengelola pertambangan, perdagangan, pengangkutan, pengapalan dan penjualan komoditas mineral untuk kebutuhan dan demand lokal maupun export.",
    visionLabel: "Visi",
    vision:
      "Menjadi perusahaan nasional andal, terdepan dan terpercaya sebagai produsen, pengangkutan dan penjualan hasil tambang dalam mendukung ketahanan industri energi dan manufaktur yang mengedepankan pembangunan berkelanjutan.",
    missionLabel: "Misi",
    mission1:
      "Memberikan Pelayanan dan Produk, serta pengangkutan penjualan hasil tambang yang profesional, berintegritas dengan Client satisfaction sebagai prioritas utama.",
    mission2:
      "Membangun dan mengoptimalkan seluruh sumberdaya SDA dan kompetensi SDM melalui keandalan pasokan, pelayanan yang optimal dengan komitmen terhadap integritas, transparansi bisnis dan Good Corporate Governance (GCG).",
    businessLabel: "BISNIS UTAMA",
    businessHeading: "Solusi Komoditas untuk Industri yang Berkembang",
    cards: [
      { label: "Perdagangan Batubara", sub: "Mineral Batubara" },
      { label: "Bijih Nikel", sub: "Mineral Logam" },
      { label: "Pasir Silika", sub: "Mineral Non-Logam" },
      { label: "Biomassa", sub: "Energi Baru Terbarukan" },
    ],
  },
  management: {
    sectionLabel: "STRUKTUR MANAJEMEN",
    heading: "Struktur Organisasi",
    subheading: "PT SBS dipimpin oleh tim manajemen berpengalaman dengan lebih dari 20 tahun di bidang pertambangan, perdagangan, dan logistik komoditas.",
    roles: {
      commissioner: "Komisaris Utama",
      ceo: "Direktur Utama (CEO)",
      cfo: "Direktur Keuangan (CFO)",
      coo: "Direktur Ops, Teknikal & Komersial (COO)",
      hrd: "Kepala HRD & Urusan Umum",
      qhse: "Kepala QHSE, DPA & CSO",
    },
    divisions: {
      cfoLabel: "Divisi CFO",
      cooLabel: "Divisi COO",
      hrdLabel: "Departemen HRD & GA",
      qhseLabel: "Divisi QHSE",
      cfoItems: ["Keuangan, Akuntansi & Pajak", "Legal", "IT"],
      cooItems: ["Komersial & Pengembangan Bisnis", "Operasi & Teknikal", "Pengadaan"],
      hrdItems: ["Pengembangan Sumber Daya Manusia", "Urusan Umum", "Crewing", "Audit & Vetting"],
      qhseItems: ["Kualitas, Kesehatan, Keselamatan & Lingkungan"],
    },
  },
  business: {
    sectionLabel: "PRODUK & LAYANAN",
    heading: "Portofolio Bisnis Kami",
    subheading:
      "Operasi perdagangan komoditas yang terdiversifikasi mencakup batubara, energi biomassa terbarukan, bijih nikel, dan mineral silika — dengan produksi, logistik, dan penjualan untuk pasar domestik dan ekspor.",
    tabs: [
      { id: "coal", label: "Batubara" },
      { id: "biomass", label: "Biomassa (EBT)" },
      { id: "nickel", label: "Bijih Nikel" },
      { id: "silica", label: "Silika / Silikon" },
    ],
    coal: {
      title: "Perdagangan Batubara — Mineral Batubara",
      desc: "Surya Berkat Semesta bekerjasama dengan pemilik & kontraktor IUP OP batubara di wilayah <strong>Kalimantan Selatan</strong> dalam menjual coal products dengan berbagai spesifikasi calorific value.",
      badges: ["Kapasitas Produksi: 420 KT/tahun", "Domestik & Ekspor", "Berlisensi IPP ESDM"],
    },
    biomass: {
      title: "Biomassa — Energi Baru Terbarukan (EBT)",
      desc: "SBS turut berpartisipasi dalam program Co-Firing Biomassa dengan memiliki dan mengoperasikan <strong>5 unit mesin Sawdust & Charcoal</strong> dengan total output <strong>6.000 Ton/bulan</strong> (60.000 Ton YoY). Fasilitas produksi berlokasi di 3 pabrik di Jawa Tengah, Jawa Barat dan Balikpapan, Kalimantan.",
      desc2:
        "Kami menyediakan komoditas kayu dalam berbagai bentuk dari yang belum hingga sudah diproses, menggunakan campuran kayu keras dan kayu ringan.",
      badges: ["Sawdust: 3.000 Ton/bln", "Woodchip: 6.000 Ton/bln", "Pasokan 50 KT/tahun", "Lokal & Ekspor"],
      sawdustLabel: "Biomassa Sawdust",
      woodchipLabel: "Biomassa Woodchip",
    },
    nickel: {
      title: "Bijih Nikel — Mineral Logam",
      desc: "SBS bekerjasama dan turut mengoperasikan kepengelolaan, logistik dan jual-beli nikel dengan IUP OP konsesi nikel di daerah <strong>Sulawesi Tenggara</strong> dan <strong>Halmahera Selatan</strong>. Kami melayani pengiriman secara FOB, CIF dan CNF, dari stockpile, jetty sampai dengan tempat pengelolaan smelter.",
      badges: ["Pengiriman FOB, CIF & CNF", "Sulawesi & Halmahera", "Kemitraan Pasokan Jangka Panjang"],
      regionLabel: "Sulawesi Tenggara & Halmahera Selatan",
    },
    silica: {
      title: "Silikon / Silika — Mineral Non-Logam",
      desc: "SBS bekerjasama dengan <strong>PT Karoja Sinergi Kreatif</strong> mengoperasikan konsesi silika berlokasi di <strong>Kalimantan Selatan</strong> dan <strong>Jawa Tengah</strong>, dengan deposit Silica Quartz/Silica Sand berkadar SiO2 tinggi. Kemampuan produksi, logistik dan jual-beli lebih dari <strong>1.000.000 Metrik Ton setiap tahun</strong>.",
      badges: [">1 Juta MT/tahun", "Kalimantan Selatan & Jawa"],
      disclaimer:
        "*Semua Produk dan Spesifikasi disediakan tanpa tambahan kontaminan lain dan tanpa proses penyiraman atau pengeringan.",
    },
    specTable: {
      parameter: "Parameter",
      basis: "Basis",
      result: "Hasil",
      unit: "Satuan",
    },
  },
  milestone: {
    sectionLabel: "PENCAPAIAN",
    heading: "Memperluas Operasi Komoditas, Menggerakkan Kemajuan",
    subheading:
      "PT SBS sedang membangun jejak di sektor komoditas Indonesia melalui investasi strategis, perizinan, dan kemitraan.",
    items: [
      {
        date: "Oktober 2024",
        title: "Kemitraan Pasokan Nikel",
        description:
          "PT SBS bergabung dalam investasi bersama PT CATP untuk kemitraan jangka panjang Pasokan & Pengiriman Nikel dengan industri smelter domestik.",
      },
      {
        date: "Februari 2025",
        title: "Izin Perdagangan Batubara (IPP)",
        description:
          "PT SBS memperoleh Izin dan Hak untuk Menjual Batubara di Pasar Domestik & Ekspor melalui Izin Perdagangan Pertambangan (IPP) ESDM.",
      },
      {
        date: "Maret 2025",
        title: "Akuisisi Saham IUP OP",
        description:
          "PT SBS melakukan akuisisi Kepemilikan Saham dan hak eksklusivitas penjualan dari Konsesi IUP OP KSK, BMEA & PMA.",
      },
      {
        date: "Oktober 2025",
        title: "Pasokan Biomassa ke Industri",
        description:
          "SBS memasok Biomassa ke Industri Listrik & Manufaktur dengan output produksi 50kt per tahun, dikirimkan ke seluruh Indonesia.",
      },
      {
        date: "Oktober 2025",
        title: "Investasi Pertambangan Batubara",
        description:
          "PT SBS bergabung dalam investasi untuk mendanai operasi pertambangan batubara dengan Kapasitas Produksi 420 KT per tahun dalam konsesi mitra.",
      },
      {
        date: "November 2025",
        title: "Purchase Orders & Contracts",
        description: "SBS memperoleh Purchase Orders dan Kontrak dari klien terpercaya.",
      },
    ],
  },
  legality: {
    sectionLabel: "LEGALITAS KAMI",
    heading: "Berizin & Patuh",
    subheading:
      "PT Surya Berkat Semesta beroperasi dengan dukungan perizinan lengkap dari berbagai instansi pemerintah Republik Indonesia.",
    docs: [
      {
        title: "Akta Pendirian Perseroan Terbatas",
        items: [
          { label: "Notaris", value: "Meissie Pholuan" },
          { label: "No. Akta", value: "02" },
          { label: "Tanggal", value: "3 Maret 2025" },
        ],
      },
      {
        title: "Keputusan Menteri Hukum dan HAM",
        items: [
          { label: "No. Akta", value: "AHU-0050734.AH.01.11.TAHUN 2025" },
          { label: "Tanggal", value: "4 Maret 2025" },
        ],
      },
      {
        title: "Nomor Induk Berusaha (NIB)",
        items: [
          { label: "No. NIB", value: "0603250066005" },
          { label: "Tanggal", value: "6 Maret 2025" },
        ],
      },
      {
        title: "Nomor Pokok Wajib Pajak (NPWP)",
        items: [{ label: "No. NPWP", value: "1000-0000-0065-0912" }],
      },
      {
        title: "Izin Usaha Kementerian ESDM (IPP)",
        items: [
          { label: "No. MODI", value: "0603250066005" },
          { label: "Tanggal", value: "6 Maret 2025" },
          { label: "Jenis Izin", value: "Angkut-Jual" },
          { label: "Jenis Ops.", value: "06032500660050004" },
        ],
      },
    ],
  },
  footer: {
    sectionLabel: "HUBUNGI KAMI",
    heading: "Hubungi Kami",
    contactLabel: "Kontak",
    copyright: "©2025 Hak Cipta Dilindungi",
    offices: [
      {
        name: "Kantor Pusat",
        address: "Kantor Taman A9, Unit A1, Kawasan RT.8/RW.3, Kuningan, Kuningan Timur, Setiabudi, Jakarta Selatan, Jakarta 12950",
        gmapsUrl: "https://maps.google.com/?q=Kantor+Taman+A9+Unit+A1+Kuningan+Jakarta+12950",
      },
      {
        name: "Kantor Pemasaran Sudirman",
        address: "Sampoerna Strategic Square Lt.22, Jl. Sudirman Kav 45-46, Karet Semanggi, Setiabudi, Jakarta Selatan, D.K.I Jakarta, Indonesia 12930",
        gmapsUrl: "https://maps.google.com/?q=Sampoerna+Strategic+Square+Jl+Sudirman+Kav+45-46+Jakarta+12930",
      },
      {
        name: "Cabang Jawa Barat",
        address: "JL. Raya Perjuangan No. 55, Kelurahan Margamulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17142",
        gmapsUrl: "https://maps.google.com/?q=JL+Raya+Perjuangan+No+55+Margamulya+Bekasi+Utara+17142",
      },
    ],
    quickLinks: ["Tentang Kami", "Manajemen", "Bisnis Kami", "Pencapaian", "Legalitas", "Hubungi Kami"],
    quickLinkHrefs: ["#about", "#management", "#business", "#milestone", "#legality", "#contact"],
  },
};

export default id;
