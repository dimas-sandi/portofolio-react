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
    description: "Alat ini adalah pembangkit listrik tenaga air (PLTA) kecil yang menggunakan turbin berbahan akrilik untuk menghasilkan listrik. Turbin tersebut mengubah energi kinetik dari aliran air menjadi energi mekanik yang kemudian dikonversi oleh motor penggerak menjadi listrik dengan tegangan antara 5 hingga 12 volt. Tegangan ini cukup untuk mengisi daya perangkat elektronik seperti charger ponsel atau menyalakan lampu LED. Desain alat ini saya buat menggunakan Autodesk Inventor untuk komponen mekanik dan SolidWorks CFD untuk analisis aliran air, yang membantu mengoptimalkan kinerja turbin. Struktur alatnya terbuat dari bahan logam yang kuat, sementara komponen utamanya berupa turbin akrilik dan motor DC. Alat ini dirancang sebagai solusi energi terbarukan yang efisien dan ramah lingkungan untuk kebutuhan skala kecil.",
    imageUrl: "project/plta.jpg",
    modelUrl: "project/plta.glb",
  },
  {
    id: "project8",
    title: "BIODIGESTER",
    description: "Biodigester adalah alat yang digunakan untuk mengolah limbah organik menjadi biogas dan pupuk melalui proses pencernaan anaerobik. Limbah organik dimasukkan ke dalam digester, di mana mikroorganisme mengurai bahan organik tanpa oksigen, menghasilkan gas metana yang dapat digunakan sebagai energi terbarukan (biogas) dan pupuk organik. Gas metana yang dihasilkan akan ditampung dalam kompor biogas atau wadah penampung untuk digunakan sebagai bahan bakar alternatif. Selain gas, proses ini juga menghasilkan sludge yang dipompa untuk pengolahan lebih lanjut. Absorber MEA digunakan untuk menyerap gas-gas yang tidak diinginkan, seperti CO₂, dan vacuum kompresor memastikan aliran gas yang stabil dari sistem. Dengan alat ini, limbah organik dapat diolah secara efisien, menghasilkan energi yang ramah lingkungan dan pupuk yang berguna untuk pertanian, serta mengurangi dampak polusi dan emisi gas rumah kaca.Description for Project 8. This is another placeholder project.",
    imageUrl: "project/biodigester.jpg",
    modelUrl: "project/biodigester.glb",
  },
  {
    id: "project9",
    title: "CARBON TECH",
    description: "Alat ini, yang dinamakan Carbon Tech, berfungsi sebagai filter udara untuk membersihkan polusi yang dihasilkan oleh tabung pembakaran. Udara yang terkontaminasi kemudian dialirkan melalui pipa menuju sistem filter yang menggunakan karbon aktif atau zeolit sebagai bahan penyaring utama. Karbon aktif efektif dalam menyerap gas berbahaya, bau, dan partikel halus yang dihasilkan dari pembakaran, sementara zeolit dapat mengikat ion tertentu dan membantu menyaring polutan lainnya. Selain itu, cairan khusus mungkin digunakan untuk meningkatkan proses penyaringan dan pengendapan partikel dalam udara, memastikan bahwa udara yang keluar menjadi lebih bersih. Sistem pompa dalam alat ini berfungsi untuk mengalirkan udara melalui filter secara terus-menerus, sementara desain alat ini memastikan filter dan pompa berfungsi secara efisien. Alat ini sangat berguna untuk mengurangi polusi udara di area yang menggunakan pembakaran, seperti di industri atau tempat dengan sistem pembakaran yang berpotensi mencemari lingkungan.",
    imageUrl: "project/carbon.jpg",
    modelUrl: "project/carbon.glb",
  },
  {
    id: "project10",
    title: "WASHING FILTER",
    description: "Alat ini adalah Washing Filter KAI, dirancang untuk membersihkan filter yang digunakan dalam sistem pemrosesan atau pembersihan, seperti pada sistem pendingin atau pengolahan air. Alat ini bekerja dengan menggunakan motor untuk menggerakkan sabuk penggerak (pulley dan v-belt), yang kemudian memutar filter melalui rangka yang ada. Proses rotasi filter memungkinkan pencucian kotoran atau partikel yang tertahan di dalam filter. Beberapa komponen utama alat ini meliputi motor penggerak, pulley, v-belt, bearing, shaft, dan rumah filter yang terbuat dari bahan logam dan plastik untuk memastikan kekuatan dan daya tahan. Dengan alat ini, filter yang terkontaminasi dapat dibersihkan dengan efisien, memastikan sistem bekerja dengan optimal dan mengurangi kerusakan akibat penumpukan kotoran.",
    imageUrl: "project/wfilter.jpg",
    modelUrl: "project/wfilter.glb",
  },
  {
    id: "project11",
    title: "ALAT PRESS INDUKTIF",
    description: "Alat yang ditunjukkan di gambar ini adalah press induktif, yang berfungsi untuk menekan plat baja dengan menggunakan pemanas induktif. Alat ini bekerja dengan memanfaatkan prinsip pemanasan induktif, di mana arus listrik mengalir melalui kumparan untuk menghasilkan panas yang memanaskan plat baja. Setelah plat baja mencapai suhu tertentu, alat ini menekan plat tersebut dengan kekuatan yang cukup untuk membentuk atau merubah bentuk plat sesuai kebutuhan. Dengan menggunakan teknologi pemanasan induktif, alat ini memungkinkan proses pemanasan yang cepat dan efisien, mengurangi waktu dan energi yang diperlukan dibandingkan dengan metode pemanasan konvensional. Alat ini sangat cocok digunakan dalam industri manufaktur, terutama dalam proses pembentukan logam yang memerlukan suhu tinggi dan tekanan yang tepat.",
    imageUrl: "project/press.jpg",
    modelUrl: "project/press.glb",
  },
  {
    id: "project12",
    title: "VIAR PEMADAM",
    description: "Alat ini adalah Viar Pemadam, yang merupakan inovasi dari motor Viar yang dimodifikasi menjadi alat pemadam kebakaran. Proses konversi ini melibatkan penggantian atau penambahan beberapa komponen pada motor, sehingga motor tersebut dapat digunakan untuk membawa dan menyemprotkan air atau bahan pemadam lainnya ke area kebakaran. Dengan menggunakan motor yang sudah ada sebagai basis, alat ini menjadi lebih efisien dan mudah digunakan, terutama di daerah yang sulit dijangkau oleh kendaraan pemadam kebakaran besar. Desain ini memanfaatkan kekuatan motor untuk memberikan mobilitas yang lebih baik, memungkinkan petugas pemadam kebakaran bergerak dengan cepat ke lokasi kebakaran dan menyemprotkan cairan pemadam dengan presisi. Viar Pemadam menawarkan solusi yang praktis dan efisien untuk penanggulangan kebakaran skala kecil hingga menengah.",
    imageUrl: "project/viar.jpg",
    modelUrl: "project/viar.glb",
  },
  {
    id: "project13",
    title: "PENGURAI SABUT KELAPA",
    description: "Alat ini adalah pengurai sabut kelapa, yang menggunakan mesin diesel sebagai penggerak dan mata pisau kayu untuk memotong atau mengurai sabut kelapa. Alat ini dirancang untuk mempermudah proses pemisahan serat sabut kelapa, yang sebelumnya dilakukan secara manual. Mesin diesel memberikan tenaga yang dibutuhkan untuk menggerakkan sistem penggiling atau pemotong, sementara mata pisau kayu berfungsi untuk memotong sabut kelapa menjadi serat-serat yang lebih halus. Desain ini memungkinkan proses penguraian sabut kelapa berjalan lebih cepat dan efisien, meningkatkan produktivitas dalam industri pengolahan sabut kelapa. Alat ini sangat berguna dalam produksi berbagai produk berbahan dasar sabut kelapa, seperti karpet, alas tidur, atau bahan baku lainnya.",
    imageUrl: "project/urai.jpg",
    modelUrl: "project/urai.glb",
  },
  {
    id: "project14",
    title: "SHAFFT MODULE GEAR MILLING VERTICAL",
    description: "Alat yang ditunjukkan ini adalah Shaft Module Gear Milling Vertical, yang dirancang untuk memudahkan pembuatan roda gigi menggunakan mesin milling vertikal. Shaft ini berfungsi sebagai komponen penting yang menghubungkan bagian-bagian mesin untuk memutar dan menghasilkan bentuk roda gigi sesuai kebutuhan. Dengan desain khusus pada shaft, alat ini memungkinkan proses pembuatan roda gigi secara presisi menggunakan mesin milling vertikal. Mesin milling vertikal digunakan untuk memotong material dengan gerakan alat potong yang tegak lurus terhadap permukaan kerja, yang sangat ideal untuk membuat roda gigi dengan bentuk dan ukuran yang tepat. Shaft Module ini sangat berguna dalam industri manufaktur, terutama dalam pembuatan komponen-komponen mekanis yang memerlukan roda gigi sebagai bagian dari mekanisme transmisi.",
    imageUrl: "project/modul.jpg",
    modelUrl: "project/modul.glb",
  },
  {
    id: "project15",
    title: "STANG DRAISER",
    description: "Alat yang terlihat di gambar ini adalah stang draiser, yang digunakan untuk membantu dalam proses pembuatan atau pemeliharaan draiser batu gerinda, khususnya pada pengasahan pahat. Stang draiser berfungsi untuk memberikan tekanan atau memodifikasi bentuk batu gerinda agar memiliki permukaan yang lebih tajam dan efisien saat digunakan untuk mengasah berbagai alat, seperti pahat. Alat ini umumnya digunakan dalam proses pembuatan alat-alat potong atau di bengkel pemeliharaan alat, di mana keakuratan dan ketajaman pengasahan sangat penting. Dengan desain yang kuat dan terbuat dari bahan logam, stang draiser ini mampu menahan beban dan tekanan yang diperlukan untuk mengubah atau memperbaiki bentuk draiser, memastikan batu gerinda dapat bekerja secara maksimal dalam proses pengasahan.",
    imageUrl: "project/draiser.jpg",
    modelUrl: "project/draiser.glb",
  },
];
