// src/portfolioData.js

/**
 * File ini berfungsi sebagai "database" untuk portofolio Anda.
 * Cukup edit dan tambahkan data di sini, maka halaman web akan otomatis ter-update.
 */

export const getPortfolioData = (texts) => [
  {
    id: "project1",
    title: "CNC MILLING MINI",
    description: "Ini adalah Alat Skripsiku, CNC milling skala mini berbasis Arduino menggunakan sistem kontrol GRBL yang memungkinkan pengguna untuk mengoperasikan mesin dengan presisi tinggi melalui G-code. Mesin ini dilengkapi dengan motor stepper NEMA 23 yang dikendalikan oleh driver TB6600, memberikan kekuatan dan ketepatan pada pergerakan tiga sumbu: X, Y, dan Z. Untuk memastikan performa optimal, mesin ini menggunakan motor BLDC 300W yang efisien untuk menggerakkan alat pemotong. Desain rangka mesin dibuat menggunakan perangkat lunak Autodesk Inventor, memastikan struktur yang kokoh dan presisi. Openbuilds dan platform Linux open-source digunakan untuk mendukung pengoperasian mesin, memungkinkan pengaturan yang fleksibel dan penggunaan perangkat lunak yang dapat disesuaikan. Dengan kombinasi perangkat keras yang kuat dan perangkat lunak open-source, CNC milling mini ini ideal untuk aplikasi pendidikan dan prototyping dengan biaya yang terjangkau.",
    imageUrl: "project/cncmini.jpg",
    modelUrl: "project/cncmini.glb",
  },
  {
    id: "project2",
    title: "MESIN PULTRUSI",
    description: "Mesin Pultrusi adalah perangkat manufaktur digital yang dirancang untuk proses pultrusi dengan kontrol presisi terhadap kecepatan dan suhu, menggunakan teknologi Smart IoT. Mesin ini menggabungkan kontrol mekanis, termal, dan antarmuka pengguna berbasis web. Sistem ini terdiri dari dua prosesor, ATmega328P yang mengontrol operasi real-time seperti motor stepper dan suhu, serta ESP8266 yang menyediakan konektivitas WiFi dan antarmuka web. Mesin ini dilengkapi dengan motor stepper, driver TB6600, dan sistem PID untuk mengontrol suhu dan kecepatan secara presisi. Antarmuka web memungkinkan pengguna mengatur suhu, RPM, dan pengaturan PID, serta memonitor kondisi mesin secara real-time. Mesin juga memiliki konektivitas fleksibel WiFi dan fitur stabilitas tinggi untuk memastikan responsivitas antarmuka. Selain itu, mesin ini dilengkapi dengan pisau karbon yang digunakan untuk memotong botol plastik, sehingga memungkinkan pemrosesan bahan secara efisien dalam proses pultrusi.",
    imageUrl: "project/pultrusi.jpg",
    modelUrl: "project/pultrusi.glb",
  },
  {
    id: "project3",
    title: "RANGKA ESAF",
    description: "Aku membuat model CAD rangka Esaf Honda menggunakan perangkat lunak Autodesk Inventor dengan pendekatan pada ukuran dan tetap mempertahankan kesesuaian bentuk dan fungsi utama rangka. Tujuan utama dari pembuatan model ini adalah untuk mendapatkan gambaran umum mengenai struktur rangka yang dapat disimulasikan menggunakan analisis elemen hingga (FEA - Finite Element Analysis). Dengan FEA, saya dapat mengevaluasi kekuatan dan ketahanan material pada rangka dalam berbagai kondisi beban tanpa harus mengutamakan presisi ukuran yang sangat detail. Proses ini memungkinkan untuk menganalisis potensi masalah struktural, seperti kemungkinan deformasi atau titik lemah, sehingga desain rangka dapat dioptimalkan sebelum diproduksi.",
    imageUrl: "project/esaf.jpg",
    modelUrl: "project/esaf.glb",
  },
  {
    id: "project4",
    title: "TANKI PENYIMPANAN CRUDE OIL",
    description: "Aku membuat desain tanki penyimpanan crude oil kemudian dilakukan analisis dengan metode FEA. Desain tangki crude oil ini memiliki diameter 36.000 mm dan tinggi 11.900 mm, dirancang untuk menampung volume besar minyak mentah. Tangki ini dilengkapi dengan berbagai komponen penting, seperti spiral stair yang terdiri dari 10 unit dengan bahan AISI 1010 dan ukuran 11.800 mm, memberikan akses ke bagian atas tangki. PV vent, sebanyak 9 unit, menggunakan bahan AISI 1010 dengan ukuran Ø500 mm, berfungsi untuk menjaga keseimbangan tekanan di dalam tangki agar gas atau uap berlebih dapat keluar dengan aman. Selain itu, terdapat water drainer sebanyak 8 unit dengan bahan SA/A106 dan ukuran 3 inci, berfungsi untuk mengalirkan air yang terperangkap di dalam tangki, mencegah kontaminasi minyak mentah. Handrail, sebanyak 7 unit dengan bahan AISI 1010 dan ukuran Ø800 mm, dipasang di sekitar tangki untuk memberikan pegangan keselamatan saat inspeksi atau perawatan. Tangki ini juga terdiri dari beberapa lapisan shell yang memiliki ketebalan bervariasi, mulai dari 8 mm hingga 16 mm, yang semakin tebal menuju bagian bawah tangki untuk menahan tekanan dan beban cairan yang disimpan. Semua shell menggunakan bahan ASTM 283-C, baja karbon rendah yang cukup kuat dan tahan lama. Sebuah manhole dengan ukuran R 723,5 mm juga terpasang untuk memudahkan akses ke dalam tangki untuk pemeliharaan dan inspeksi. Proses pembuatan tangki melibatkan pembengkokan dan pengelasan pada sebagian besar komponen, sementara beberapa bagian, seperti PV vent dan water drainer, diproses dengan teknik pemesinan untuk memastikan pemasangan yang presisi. Semua komponen ini bekerja bersama untuk memastikan tangki memiliki struktur yang kuat, aman, dan efisien dalam menyimpan minyak mentah, serta memudahkan pemeliharaan secara berkala.",
    imageUrl: "project/crude.jpg",
    modelUrl: "project/crude.glb",
  },
  {
    id: "project5",
    title: "KONVERSI MOTOR KONVENSIONAL >> LISTRIK",
    description: "Proyek konversi motor Yamaha Alpha 1988 menjadi motor listrik ini bertujuan untuk mengubah motor konvensional menjadi kendaraan listrik yang efisien dan ramah lingkungan. Dalam proyek ini, saya merancang rangka yang kokoh dan dudukan baterai yang aman untuk mendukung motor BLDC 2000 watt serta komponen kelistrikan lainnya. Desain rangka menggunakan bahan seperti plat baja dan aluminium untuk memberikan kekuatan yang cukup dalam menahan beban motor dan baterai. Dudukan baterai dirancang agar stabil dan seimbang, memastikan posisi baterai yang aman selama penggunaan. Selain itu, saya juga melakukan analisis menggunakan Finite Element Analysis (FEA) untuk mengevaluasi kekuatan struktur rangka dan dudukan baterai, memastikan desain dapat menahan beban dan tekanan saat beroperasi tanpa mengalami kegagalan. Dengan pendekatan ini, motor Yamaha Alpha dapat beralih ke sistem penggerak listrik yang lebih ramah lingkungan, efisien, dan memiliki performa yang handal.",
    imageUrl: "project/mtr.jpg",
    modelUrl: "project/mtr.glb",
  },
  {
    id: "project6",
    title: "PLTS CIP PERTAMINA",
    description: "Dalam menjalankan visi dan misi Pertamina Net-Zero  Emission (NZE)  atau  nol  emisi  karbon , Salah satu Solusi untuk mengatasinya adalah menggunakan energi terbarukan dalam hal ini adalah energi surya, Solusi ini juga dapat mengurangi konsumsi daya kwh Listrik PLN di AFT SMB II sebesar 4365.4  kwh. merancang Pembangkit Listrik Tenaga Surya dibutuhkan data kebutuhan daya pada area yang akan dialiri Listrik (pada konteks ini Maintenance Pantry). Setelah diketahui kebutuhan dayanya  bisa dihitung kebutuhan dari spesifikasi komponen yang akan digunakan nantinya. Setelah komponen ditentukan, desain dari komponen diperlukan untuk menyatukan semua komponen menjadi satu kesatuan (assembly) agar bisa menunjukkan model 3D dan ukuran rangka Solar Panel yang sudah dilakukan Analisa FEA perlu dibuat agar dapat memberikan gambaran dalam proses pengerjaan atau perakitan PLTS.",
    imageUrl: "project/plts.jpg",
    modelUrl: "project/plts.glb",
  },
  {
    id: "project7",
    title: "TURBIN PLTA",
    description: "Description for Project 7. This is a placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+7",
    modelUrl: "card.glb",
  },
  {
    id: "project8",
    title: "BIODIGESTER",
    description: "Description for Project 8. This is another placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+8",
    modelUrl: "card.glb",
  },
  {
    id: "project9",
    title: "CARBON TECH",
    description: "Description for Project 9. This is a final placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+9",
    modelUrl: "card.glb",
  },
  {
    id: "project10",
    title: "WASHING FILTER",
    description: "Description for Project 10. This is a placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+10",
    modelUrl: "card.glb",
  },
  {
    id: "project11",
    title: "ALAT PRESS INDUKTIF",
    description: "Description for Project 11. This is another placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+11",
    modelUrl: "card.glb",
  },
  {
    id: "project12",
    title: "VIAR PEMADAM",
    description: "Description for Project 12. This is a final placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+12",
    modelUrl: "card.glb",
  },
  {
    id: "project13",
    title: "PENGURAI SABUT KELAPA",
    description: "Description for Project 13. This is a placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+13",
    modelUrl: "card.glb",
  },
  {
    id: "project14",
    title: "SHAFFT MODULE GEAR MILLING VERTICAL",
    description: "Description for Project 14. This is another placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+14",
    modelUrl: "card.glb",
  },
  {
    id: "project15",
    title: "ALAT BANTU PERGANTIAN FILTER BAHAN BAKAR KAI",
    description: "Description for Project 15. This is a final placeholder project.",
    imageUrl: "https://via.placeholder.com/800x600/ddd/000?text=Project+15",
    modelUrl: "card.glb",
  },
];
