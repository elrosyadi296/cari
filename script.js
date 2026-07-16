/* ==========================================================
   SUMBER DATA SISWA
   Ganti / tambah data di array ini sesuai data riil madrasah.
   Format nomor WA wali kelas: kode negara tanpa "+" (contoh 6281234567890)
   ========================================================== */
const STUDENTS = [
{ nama:"ADINDA RISQITA RAHMA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"AFNAN MAHIRA MAJDIYA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"AHMAD MAULANA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"AKFINI NAJWA AZKIYA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"ALIF MUTTAKIN", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"ALYANU AF IDAH", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"AZKA LAILA HUSNA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"DEVITA SILVIANA AZ ZAHRA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"FAKHRI AKHMAD", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"GALIH FERDIANSYAH NUR KHOLIQ", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"IBNU LATHIF", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"KHANZA ALESHA ZAHRA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"M KHANIFUDIN", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"MUHAMAD KUN KARIM", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"MUHAMAD NAZAM RIFA'I", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"NAFISYAH SONDANG PUJIASIH", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"ROBITH RACHMAN CHAKIM", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"SHIHAB ALWI MUSTOFA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"SHOKHABIYYAH KHOIRIN NISAA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"TRI MUJIONO", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"VIKY IZZATI KHASANATI", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"WAFDA YAZID ARROFIQ", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"ZAHRA ASYLA RAHMA", asalKelas:"7 KOMPETISI", kelasSekarang:"8 KOMPETISI", waliKelas:"Hana Wahyuni, S.Pd", waNomor:"62895327512526" },
{ nama:"AHMAD 'AZMI SYUHADA", asalKelas:"7A", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"AHMAD FAJAR SHODIK", asalKelas:"7B", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"ALIFFIA RIZQIKA", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"AMIN FATAH", asalKelas:"7A", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"ANISA SALSABILA", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"ARUM DESANTI", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"BILAL MUHTAROM", asalKelas:"7D", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"FARKHATUL MUSTAFIDA", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"HILMI MUSYARROF", asalKelas:"7D", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"HILWA FURAIDA", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"INDAH NIKMATUL FADHILAH", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"JANCEL HARUMI SURYASEVA", asalKelas:"7F", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"KANIA ASRI LIANI", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"LUQMAN CHAKIM ABDILLAH", asalKelas:"7C", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"LUQMAN FAITH ABDILLAH", asalKelas:"7D", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"MARIYATUR RIYADHOH", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"MELISA SEPTIANI", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"MUHAMAD NUR FAOZI", asalKelas:"7B", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"NAFISATUL ULYA", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"NAILA SYIFA RAHMA", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"NOVIANA PUTRI ANGGITA", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"RAFLI UMAR RAMADHAN", asalKelas:"7B", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"RAIHAN INDRA MUZAKI", asalKelas:"7A", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"RIO ARDIANSYAH", asalKelas:"7A", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"SEPTHIA SAFUROTUN NAJAH", asalKelas:"7E", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"ABDUL ROHMAN AL GHOZALI", asalKelas:"7A", kelasSekarang:"8A", waliKelas:"Agung Mubarok, S.Pd", waNomor:"6282313578017" },
{ nama:"ABIYAS RANGGA RUDIANA", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"ACHMAD BACHRUL 'ULUM AL - MACHFUD", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"ALVIN RAMADHAN SUBIANTO", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"AUFA HUSNI ABDILLAH", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"BAYU GUSTAV AULIA", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"FAJAR SETIYONO", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"GUESTA PRIYA ADILUHUNG", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"HAKIM MUBAROK", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"ISNAN DZULFAN AL KHAFID", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"JULIAN ARKA HIDAYAT", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"LUTFI ARFAN JUNAIDI", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MALIK IBRAHIM", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAIMIN RIZAL", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMAD BAHTIAR JEFREY HUSNI", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMAD DAFFA VEDRIANSYAH", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMAD GHOZI", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMAD KHOIRUL ANAM", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMAD SHOFI MUBAROK", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMMAD HAKUL FAIZIN", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"MUHAMMAD LUQMAN AL FARIZI", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"OKTORIAN AKBAR MUBAROK", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"RANDY BEKTI AL FAHIM", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"SALMAN KHAN NUR SALIM", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"SANDIKA DIAN RAMADAN", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"SOLIHUL HUDA", asalKelas:"7A", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"ZAIN REZQY KHAIRULLOH", asalKelas:"7B", kelasSekarang:"8B", waliKelas:"Umi Mutohirotun Nisa, S.Pd", waNomor:"6288985185288" },
{ nama:"ADHITYA SURYA FIRMANSYAH", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"AHMAD ASYROFUL ANAM", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"AHMAD FADLY MUSTOFA", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"AHMAD NAUFAL FADHIL", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"ALFIAN SURYO VIRGINITY ARYANTO", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"'AQIL KHANIFA MU'ALI", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"AQIL NUR HAKIM", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"ARZAT KUNNUR AFANDI", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"FEBRIAN QALIFA ALFARIZKI", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"FERI FEBRIANZAH", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"GUSTI RAMADHANI", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"HABIB FERRIS NIZAR MOHAMAD", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"ILYAS ROBI AL KURNIYANTO", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"IYAS CHANIF TIYANTO", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"LUQMAN HAKIM ALBASTOMI", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMAD AZHAR SARIF", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMAD FATHUL MAULA", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMAD NAUFAL RAMADHAN", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMAD WILDAN AL KHAFIZD", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMMAD DAFFA PERMANA", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMMAD MUSTOFA ALI", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMMAD RIZKI GUNAWAN", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"MUHAMMAD SYAFIQ ROKHIM", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"RAFA WILDAN SAPUTRA", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"YAZID IRSYADI", asalKelas:"7B", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"ZARIF NAUFAL ARFANSYAH", asalKelas:"7C", kelasSekarang:"8C", waliKelas:"Abdul Wahab, S.Ag", waNomor:"6282191781748" },
{ nama:"AHMAD MAROGI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"AKHMAD MAULANA YUSUP", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"AZZAM AL MUKHOZIN", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"DHANANJAYA KALYANA NUSANTARA", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"EVAN MAULANA KAMIL", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"HABIB ADNAN AL FATH", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"IQBAL UBAYDI ABDULLOH", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"LABIB KHAUDLUL 'ULUM", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MAHBUB JUNAYDI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMAD AZIS RAMDANI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMAD FAKHRI KAMAL AL MUBAROK", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMAD FARKHAN ASNAWI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMAD FREIZKY PRAMANA", asalKelas:"7B", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD ARIF AZAKY", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD BAHA UDIN", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD FADHIL RAIHAANU IKBAR", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD ILHAM AZIZUL LUTFI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD KHILMI BIQ'NADAA", asalKelas:"7B", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD NURYAZID SURURI", asalKelas:"7B", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHAMMAD SULTHON AL KAUTSAR", asalKelas:"7C", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUHTI ABIL AFFANDI", asalKelas:"7C", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"MUNTAHAA SHOBRUL 'ULAA", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"NAZREY ALI HANAFI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"QOIS SYAIKHURROHMAN", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"REZA WINDRIAJI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"TEGUH RAMDANI", asalKelas:"7D", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"TRI AFGANI", asalKelas:"7B", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"TYAS ADI NUGROHO", asalKelas:"7C", kelasSekarang:"8D", waliKelas:"Luthfi Rosyadi, S.Ag", waNomor:"6285875522018" },
{ nama:"`AINI HASBIYATUL HUSNA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"ADINDA FULAN ALKARIMAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"ANGGITA NATASA RAHMADANI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"AQILAH NURUL IZZAH", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"ASFAKHA KHAIROTUN NIKMAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"ATHAYA EHSA FATIHAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"CHALIMATUL ULFA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"CICA BAYU SAPUTRI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"FAIQOTUS SHOLIHAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"FARIDATUN NIDA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"FRISKA FEBRIANI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"HANANTIA FILZA ADANI RH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"HASNA KHOIRUNNISA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"JUAN LUTFIA RAHMADANI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"KHIYAROTUL WAFIYAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"LUHITA CLARA JATI LISTALINING PURNAWAN", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"MARIYATUL MASRUROH", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"NADHIROTUZZAHRO", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"NAFA ANINDYA LATIFAH", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"NAILA ANA NAJIAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"NININ NABILA KHAIRUNNISA", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"RIRIN FITRI YANTI", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"SITI FADILAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"SUCI GUNAWAN PUTRI", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"SYAKILA AZZAHRA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"SYIFA AYATUL HUSNA", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"TANI'A EKA DAYANTRI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"VELLICIA DWIYAN PUTRI RIYADI", asalKelas:"7F", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"ZULFATU NI'MAH", asalKelas:"7E", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"MUTIARA UZMA AL FIRDAUS", asalKelas:"8 PINDAHAN", kelasSekarang:"8E", waliKelas:"Zulfatussuroya, S.Pd", waNomor:"6285867107303" },
{ nama:"AMANDA DWI PUSPITASARI", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"AMANI NABILATUN ASLA", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"AULIA KHUSWATUN MA'RIFAH", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"AULIA RAHMA", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"FARIKHATUN AULIA", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"FELLIN CAHYANINGTYAS", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"HERLINA NURAINI", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"ISTINA ASSYABIYA RAFIFA", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"ISYFI KHUMAIROH", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"KANAYA SALWA", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"KHALDA MAHYA ALHUSNA", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"KHALISYAH PUTRI INDRIYANTI", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"KHASANATUL MA'RIFAH", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"LULU ARIFATUL CHOLIFAH", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"LULU NHADIFAH", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"MUFTI IMROATUN NAFISYAH", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"NABILA NUR KHALIFAH", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"NAFISA AZZAHRA", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"NAH DINA VIROTUN NAZWA", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"NISAUL FADILAH", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"NUR ANNITA", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"PIPIT YULIANA", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"RAHMA IMROATUSSILMI", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"RIF'ATUL AGHNIYAH", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"RIFNGATUN MUNAWAROH", asalKelas:"7H", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"SAIDA HASNA AULIA", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"TRI NAILUL INAYAH", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"ULFATUL AFIFAH", asalKelas:"7G", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"ZAHWA RAMADANI", asalKelas:"7F", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"Surfina Alya Firzanah", asalKelas:"8 PINDAHAN", kelasSekarang:"8F", waliKelas:"Al Fiah Rahmawati, S.Pd", waNomor:"62895392644247" },
{ nama:"AKIFA NAILA APRILIANI", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"ANANDA LUTHFIA ISTIQOMAH", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"AULIA IZZATUNNISA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"AZKA NAILATUN NAFIZAH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"CLARISSA MEGA NANDA", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"FARKHATUL ISNAENI KAMILA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"FIN FATIMATUZZAHRO", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"INDAH AINUNNIYAH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"JIHAN DEWI SALAMAH", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"JINAN ZAHIRA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"KHANSA SALSABILA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"LAILA KHOTIMATUNISA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"MAULIDAN UMMU MAGHFIROH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"MEILIA AZZAHRA PUTRI", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"NADA AWALIYAH FITRI", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"NOFITA ANGGRAENI", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"PUTRI NAILA ZAHRO", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"QURROTU 'AINI MALA'AT JAMELA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"RAIHANA ABELLIA SEPTIANI", asalKelas:"7F", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"RERE MEIDA", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"RISQA WAKHIDATURROKHMAH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"ROHMATUN NAZILAH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"SASKIA TESYA SAPUTRI", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"SAVIR EL MA'WA", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"TANIA NURY NUR AINI", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"TANISA LATIF HADIANSAH", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"TRI AMALIA", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"TRI SULIS TIANI", asalKelas:"7G", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"ZIDNI ILMA AHSANI", asalKelas:"7H", kelasSekarang:"8G", waliKelas:"Ulfatussa'diyah, S.Pd", waNomor:"6281325558041" },
{ nama:"ATHAYA PUTRI ZAYYAN", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"FASTABIQUL KHOEROTH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"FITRIA NUR AZIZAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"FITRIAN AGUSTINA PUTRI", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"GHAITSA ZAHRATUS SYIFA", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"ITAUS SALWAUL CHAKIM", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"KEYLA SHAFA QUROTA TA'AYUN", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"M.GHIFARI HUSAIN", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"MUHAMMAD IMAM SHOFIYUDDIN", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"MUHAMMAD SAHLAN AL WAFA", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"MUHAMMAD ZIDAN AKMALUL KAFIE", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"NAHYA NAILAL BAROKAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"NAILA NAFISAL JANNAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"NAZWA SAFIRA PUTRI", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"NIDAUS ZUHRIYAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"NIKEISHA MAHYA ANNAFI`", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"RIKI KURNIAWAN", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"SAYYIDAH ALMAS QOTHRUNNADA", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"SILFIKA NURUL CHILMI", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"UMMI BAROKATUL HABIBAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"UMMU CHABIBAH", asalKelas:"8 KOMPETISI", kelasSekarang:"9 KOMPETISI", waliKelas:"Amanatul Qirom, S.Pd", waNomor:"6282244788530" },
{ nama:"AHMAD NABIL RIZQIARTO", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"'AINUN KAMILAH", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"AKHMAD FAUZAN", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"AKHMAD RIDWAN SURURI", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"AMRINA NING MARDIANA ULFAH", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"CATUR ALDERCY CHASIA BILHA", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"DESTRIN ALVIANDRA PUTRA", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"DINI KHOIRUNNISA", asalKelas:"8G", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"FEBRIAN BAGUS FIRMANSAH", asalKelas:"8D", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"FIRDA AMAL LIA", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"HANINDYA NUR HANIFAH", asalKelas:"8E", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"HILMY FAEYZA", asalKelas:"8D", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"ILHAM NASRULLOH", asalKelas:"8B", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"ISNAENI WAHYUNINGSIH", asalKelas:"8E", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"M. AZAM MUZAKI", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"MARTINA DILOSA", asalKelas:"8F", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"MARWAKHUL KARUNIA", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"RIFAA' KHORUNNISA'", asalKelas:"8G", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"RIFKI ZAKI PRATAMA", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"RIZKY RAMADHAN", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"SAIDA NUR KHASANAH", asalKelas:"8E", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"SOFI ANWAR", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"SYIFA AGUSTINA RAMADANI", asalKelas:"8G", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"ZAINUL LABIB KAFABIHI", asalKelas:"8A", kelasSekarang:"9A", waliKelas:"Winda Murwani, S.Pd", waNomor:"6287738532176" },
{ nama:"AGHA MAULANA ABBASY", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"AHMAD AUFA GHONI ASHROF", asalKelas:"8 PINDAHAN", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"AHMAD FAUZAN MUBAROK", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"ALFIAN PRATAMA NUROHMAN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"ASIF FAJARULLOH MUSTAKIM", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"DAFFA MUFID HAKIM", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"FAIZ ABDURROHMAN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"FARIS NAUFAL HARIYANTO", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"FAZA' ASYIQURROCHMAN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"GILANG RAMADHAN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"IWAN MAULANA SAPUTRA", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"IZZI ALFAN KHOBIR", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"KHOERUL MUARIFIN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"M IRFAN ROSYADI", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"MASRURI KHOLIK", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"MIFTAHUL DANA FIRDAUS", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"MOHAMAD AMRI HIDAYAH", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"MOHAMAD KHANIF NAUFAL", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"Muhamad Alfian Priyanto", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"MUHAMMAD KHOERUL ANAM", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"NAJMI ZAIN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"NIZAM DWI APRILIO", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"RAHMAT WAHYUDI", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"RIZKY FAUZAN MUSTHOFA", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"RIZQI MUBAROK", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"Syafiq Annajmutsaqib", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"TATAN SETIAN", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"YOGA PRASETYO SASMITA SUPRIATNA", asalKelas:"9 PINDAHAN", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"YUSUF MAHARDIKA", asalKelas:"8B", kelasSekarang:"9B", waliKelas:"Ayyun Farikhatun Jannah, S.Pd", waNomor:"6282133112231" },
{ nama:"ABDUL MALIK MAHMUD", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"Aby Abdiya Sukma Raharjo", asalKelas:"8B", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"ALGIAS SYAH FAHRI", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"ALI ZIDAN SETIAWAN", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"AMAR MUSTOFA", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"ARI DWI SAPUTRA", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"AZHAR AFYANSYAH", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"FAKHRI ABAN", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"GUNAWAN DWI CAHYO", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"KHAMDAN KHOMSIN", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"KHOERUL AKHMAD NURROFIQ", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MAULANA IBRAHIMUVID", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MOHAMMAD FAISAL RAMADAN", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUDRIK ANWAR", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMAD HISYAM MAULANA", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMAD TOYYIBI", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMMAD HISYAM MUSYAFFA", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMMAD KHAIDAR", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMMAD LUTFI AIMMATUL KHAFILI", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUHAMMAD WAHYU ILLAHI", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUKHAMMAD AZKA HANIF", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"MUSLIH HUMAEDILAH", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"RAIHAN RAMDHANI", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"RAVQA ADITYA RIFALDO", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"SABDO WIBISONO", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"SYIFA'U NUR FADLILLAH", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"WILDAN FAHRY SAPUTRA", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"ZIDNI MUBAROK", asalKelas:"8C", kelasSekarang:"9C", waliKelas:"Siyam Tohiroh, S.Pd", waNomor:"6285700541077" },
{ nama:"AHMAD ALI ZAIN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AHMAD FAQIHUNNAJA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AHMAD MUDHOFAR SAKBAN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AHMAD MUHTADIN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AKHMAD WILDAN SURURI", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AKYAS HILMI", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"AMRUL MUSTOFA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"ARRAFKHA JOVYANSYAH PUTRA HIDAYAT", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"BINTANG SEPTIAJI PRAKOSO", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"DANI FAIQ KHAIRULLOH", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"DANIAL FATHUL KHAKIM", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"FAIQ ANNAS KHABIBI", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"FARHAN ADITIYA PRATAMA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"FARHAN AZIZ ZULFIKAR", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"FUAD IBNI HASAN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"ILHAM HENDRY MAULANA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"M.MIFTAKHURROKHMAN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MAULANA ALI SYAHBANA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"Maulana Bilal Arrifai", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUH ASADUDDIN KHOLISUL ANWAR", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUHAMAD 'AINURROFIQ", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUHAMAD SAIF", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUHAMMAD AZZAM SIROJUDIN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUHAMMAD FAUZUL MUBIN", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"MUHAMMAD NUGIE ALFATHIR", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"RIDWAN NUR KHAKIM", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"RIZKY ADITYA PRATAMA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"TRI PUTRA RAMADHANA", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"YAHYA ARIF PURNOMO", asalKelas:"8D", kelasSekarang:"9D", waliKelas:"Catur Mulyantoro, S.Pd", waNomor:"6289677669746" },
{ nama:"ADINDA KHEISYA PUTRI STEVANY", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"Aghitsna Bilqis Ashifa Barqiya", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"AJENG RAHAYU", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"'ATIQ HANIFATURROHMAH", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"AULIA KHOIRUN NISA RAMADANI", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"AZMALIA NOVELA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"DEWI FITRIYANI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"DWI RAYA NINGTYAS", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"FAIZAH NUHA MUYASAROH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"FINA LAELATUL FAJRIYAH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"FLARIZA ZULVANA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"IKA ISMAULHAWA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"INDRI NUR NAYLA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"KHOLIFAH NUR AZZAHRA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"KHUSNA CHOIRUN NISSA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"KUNTI NAELA JANATA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"LAILATUSSANGADAH HANANIE", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"LILIS RATNASARI", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"LULUATUN NAFISAH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"MITA NUR BAETI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NADHIRA ALYA AZ ZAHRA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NAELI AZIZAH", asalKelas:"8A", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NAFIS NAILIN NURFITA", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NGURWATIL WUTSQO BASHORI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NOER HASSANAH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"NURI RAHMAYANTI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"PRISKA SETYANINGSIH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"RAFELISHA HADINING PUTRI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"RENNY NUR 'AENI", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"SYIFA'UL JANNAH", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"WARDAH NAYLA KAMAL", asalKelas:"8E", kelasSekarang:"9E", waliKelas:"Wasiman, S.Sos", waNomor:"6285702776515" },
{ nama:"AFIFATUL A'SYAHIRA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"AFRIZA TASYA DWI CAHYONO", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ALFIYATURROHMAH RAMADHANI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ANGGUN JULIAN PRASTIWI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ANNISA HUMAIRA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ASFA NASIFA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ATSILLA LUQYAANA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"AWALIA SYIFA FUADA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"DHEA ANINDIA PUTRI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"DIKA AURA PUTRI", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"EKA NURUL FATIHAH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ELISA TRI SEPTIYANI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ELYSHA SYAHRANI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"FARAH ANJANI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"FIYYA BAROOKATUN NISAAU SYARIFAH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"HANIFAH KHARISMA PUTRI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"IKA SETIA NINGSIH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"INTAN AJENG PANGESTI", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"IZZATY ALTHOFUNNISA SUKASTO", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"LUISA DESTI MA'RIFAH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"MALIHATUZ ZAHRO", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"NADIA HAFSYAH RAMADHANI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"NASRIYATUL KHOERIYAH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"RITA KHAIROTUL HIDAYAH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"RIZKI LUTFI ANNISA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ROKHMAH NAJATI", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"SEKAR AYU VIDIASTUTI", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"SITI AYDA ALTHOFUNNISA", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ZAHIRA KURNIA ASIH", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ZAHROTUL FIRDAUS", asalKelas:"8F", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"ZULFA NUR AINI", asalKelas:"8A", kelasSekarang:"9F", waliKelas:"Riski Irfani, S.E", waNomor:"6285280877410" },
{ nama:"AFIFA KHOIRUNNISA", asalKelas:"8A", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"AISYAH SUCI RISNAWATI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ALIKA RIZQUINA RAHMAH", asalKelas:"8A", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"'ALIYA JAZILA", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ASIFA TRIANINGSIH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ASYIFATUL KHOIROH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"DIAJENG SETYA PANGESTI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"DINI MA'RUFI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"FARAH AYUMNA", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"FEBRIANI AMELIASARI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"FU`ADATUL FITRIYAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"HANA' SOLIKHAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"HASNA UMI SALAMAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"KARIMATIL MA'RIFAH AHMAD", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"LIVYA NURUL UMMAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"MAGHFIROTUS ZAZKIA", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"MAULIDA KHOIYRUNNISA", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"MU' THI ATURROHMAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"NIKEN FADHILATUL AZIZAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"NURUL KAROMATUL LAILI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SALISA ALIF NAJATI", asalKelas:"8A", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SALSA AMELIA SUBEKTI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SEKAR ARUM CAHYANINGTYAS", asalKelas:"8A", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SEPTYANA RAGIL SAPUTRI", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SHIFNA IDAMATUL AZMINA", asalKelas:"8A", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"SYIFAUL UMMAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"TIARA SALSABILLA", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ULFI LAILATUZZAHRO", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"VIDA MA'TUL LATIFAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"YUNI NURHALIMAH", asalKelas:"8G", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ELVA DINDA APRELIA", asalKelas:"9 PINDAHAN", kelasSekarang:"9G", waliKelas:"Muhamad Abdul Faqih, S.Pd", waNomor:"6282325658451" },
{ nama:"ALFI ZAHROTUL JANNAH", asalKelas:"SDN 2 KARANGGADUNG", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"AQILA SAKINATUZZAFIRA", asalKelas:"MI MA'ARIF KRAKAL", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"ARKAN BADRUT TAUHID", asalKelas:"SDN SUMBERADI", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"AZKA MAULINA FURAIDA MUBAROK", asalKelas:"MIS MAARIF WIDORO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"AZZAHROH MAWADAH AZKA", asalKelas:"MI SULTAN AGUNG 2 KALIPOH", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"BAGUS WIRA ATMADJA", asalKelas:"SD N PESAWAHAN ", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"BELVA FARADIZA AQUINA HAQI ", asalKelas:"MI DIPONEGORO 1 PURWOKERTO LOR ", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"DZAKIRA TALITA ZAHRA", asalKelas:"SD NEGERI CILEMPUYANG 03", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"FATHIN LUTFIA RAHMA", asalKelas:"SDN PATUKREJOMULYO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"FAUZAN FADHEL HIMAWAN", asalKelas:"SDN GUMAWANG", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"FITRIATURROKHMAH", asalKelas:"SD N 2 TANAHSARI", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"IBNU HAJAR", asalKelas:"SD NEGERI 2 SIDOAGUNG", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"LAUREN TRI AGUSTINE", asalKelas:"SDN 1 BUMIREJO PURING KEBUMEN", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"MAULANA KEVIN AFISENA", asalKelas:"SD N PASAR BARU 07 JAKARTA PUSAT", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"MUHAMAD TORIQ MAULANA", asalKelas:"SD NEGERI KEDUNGAGUNG", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"MUHAMMAD 'AFIF", asalKelas:"SD N JOGOSIMO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"MUHAMMAD ALFIN ZIDNA FAQIH", asalKelas:"MI MA'ARIF KARANGWUNI", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"NAJWA PUTRI ARIFFDA", asalKelas:"SDN PATUKREJOMULYO ", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"NAYLA SYAFIRA", asalKelas:"SD N 1 TAMBAKMULYO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"NISRINNA NAJWA AZ ZULFA", asalKelas:"SDN 4 NUSAWUNGU", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"NURUL HIKMAH", asalKelas:"SD NEGERI SITIBENTAR", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"SYAUQI MUHAMMAD", asalKelas:"SDN 1 MEKARSARI", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"TASYA AMELIA", asalKelas:"SDN TUKINGGEDONG", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"ULFA KHAIRUNNISA", asalKelas:"SDN 1 BUMIREJO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"YUNA AURORA DWI ALEXXA", asalKelas:"SD N 1 TAMBAKMULYO", kelasSekarang:"7 KOMPETISI", waliKelas:"Asri Ainul Jannah, S.Pd", waNomor:"6285877926174" },
{ nama:"AHMAD MAULANA PUTRA ", asalKelas:"SD IT HASANAH FATIMIYAH ", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"ALLYCIA ZAHRA RAMADHANI", asalKelas:"SD NEGERI 2 KEBULUSAN", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"ANIDA ULKHUSNA", asalKelas:"SD N 2 SRATI", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"AUFA LEILA ALZENA", asalKelas:"SDN 3 SIDOLUHUR", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"DAMAR SETYO PANGESTU", asalKelas:"MISAL HIDAYAH KARANGTANJUNG ", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"FAJAR HASYIM MARZUKI", asalKelas:"SD N ADIKARTO", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"FILDANIA NUR ASYIFAH", asalKelas:"SD NEGERI 2 SINUNGREJO", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"FITROTUL ALIFAH", asalKelas:"SD N 1 MEKARSARI", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"IKHLASHUL AMAL", asalKelas:"SD NEGERI KEDUNGAGUNG ", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"KHARISMA AYU MAHARANI", asalKelas:"SDN 2 GEBANGSARI", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"KHAYRI RAHMAN AL ADHNI", asalKelas:"SD NEGERI 5 SIMPANG PEMATANG", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"KHILDA FATIMATUZ ZAHRA HASYIM", asalKelas:"SDN 2 TERSOBO", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"MAULANA ALIF AFRIANSYAH", asalKelas:"MIS SULTAN AGUNG 2 KALIPOH", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"MOHAMMAD TORIK ASSALAM", asalKelas:"MI MA'ARIF MANGUNRANAN", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"MUHAMAD SAFIQ RAMADHAN", asalKelas:"MI MA'ARIF MANGUNRANAN", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"MUHAMMAD ARSYA DANI ULINNUHA", asalKelas:"MI MA'ARIF WIDORO ", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"MUTIA NUR'AINI", asalKelas:"SDN 1 LUNDONG", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"NURIN NAJWA AZ ZAHRA", asalKelas:"SD NEGERI ROWOREJO", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"REIHANA LATIFAH ZAHRA", asalKelas:"SD N TUKINGGEDONG", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"REKI MUTTAQIN", asalKelas:"SD NEGERI PENEKET", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"SITTA AULIA RAHMAH", asalKelas:"MIN 1 KEBUMEN", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"SYIFA MUTMAINAH", asalKelas:"MI IMAM PURO LUBANG INDANGAN", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"TUTI ALAWIYAH", asalKelas:"SDN 2 KARANGSARI", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"ZIDNI NUROL FADILAH", asalKelas:"MIS SULTAN AGUNG 1 KALIPOH", kelasSekarang:"7 Vokal", waliKelas:"Inarotun Nadhiroh, S.Pd", waNomor:"6288221237904" },
{ nama:"AAQILAH AL SAHWA", asalKelas:"MIS AL YUSUFIYAH BULUSPESANTREN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ABDUL ROZAK AL FATIH", asalKelas:"MI NU YAPIKA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"AGAM ABDILLAH PRATAMA", asalKelas:"MI NU YAPIKA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ALFIAN ADI PUTRA PRATAMA", asalKelas:"SDN 1 KEDUNGWINANGUN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ALIF RAMADHAN", asalKelas:"MI NU YAPIKA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ANUGRAH FAJAR RAMADHANI", asalKelas:"SDIT AMALIA PODOURIP", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ASSYIFA RAYA MUMTAZ", asalKelas:"SD NEGERI 1 JOGOMERTAN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"AURELIA NAURA ZAFARANI", asalKelas:"SDIT VIP AL-HUDA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"AZZAM PRATAMA ", asalKelas:"SD N AMPELSARI ", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"AZZAM TSAAQIB RAFANDRA", asalKelas:"SD NEGERI 1 LOGEDE", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"CAHYA TRI PAMUNGKASIH", asalKelas:"SD NEGERI 2 TANGGERAN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"CASYA LAIFANO AGUSTRIN", asalKelas:"SDN2 TAMBAKMULYO", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"FANESA NIKI AZIZAH", asalKelas:"SD NEGERI 1 BRECONG", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"HENY SIDQIYA", asalKelas:"SDN KTANDEGAN 1", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"JEKLIARAYA", asalKelas:"SDN PODOURIP", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"LAILA ATIKOH", asalKelas:"SD NEGERI 3 KLAPASAWIT", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"LUTHFIA ZAHRA TALITA", asalKelas:"MIS GIWANGRETNO", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"MIFTAH SUNANDAR AL ANSORI", asalKelas:"SDN 1 DOROWATI", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"MIFTAHUDIN", asalKelas:"MIS DIPANEGARA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"MOHAMAD ZAINUL MUSTOFA", asalKelas:"SD NEGERI 1 KRITIG", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"MUHAMAD YAHYA", asalKelas:"SD NEGERI 1 KRITIG", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"MUHAMMAD NAUFAL HAKIM", asalKelas:"MI NU YAPIKA", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"NAELLA KHASNA", asalKelas:"SDN GADUNGREJO", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SABILA WAHYUNI HIDAYAH", asalKelas:"SD NEGERI 1 JOGOPATEN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SAFIRA MAULIDA ROHMAH", asalKelas:"MI KHR ILYAS", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SAJIDA AZZA ROKHMI", asalKelas:"SD NEGERI GROGOL BENINGSARI", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SHAFA LUTFI AZMI ", asalKelas:"SD N JOGOMERTAN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SIDIQ MA'ARIF", asalKelas:"SDN 2 KEBULUSAN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SINDI DWI APRILIA", asalKelas:"SD NEGERI 1 SIDOMORO", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"SYAFIQ ADIBUL UMAM", asalKelas:"MIN 2 KEBUMEN", kelasSekarang:"7A", waliKelas:"Ali Barkah, S.Pd", waNomor:"6289526362757" },
{ nama:"ABDUL NAUFAL ABYAN", asalKelas:"MI MA'ARIF TANJUNGSARI KUTOWINANGUN", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"ADAM DAFFA MUBAROK", asalKelas:"SD NEGRI 5 KUTOSARI, KEBUMEN", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"AHZA KAFA PRIADI", asalKelas:"SD NEGERI 1 BOJONGSARI", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"AKHMAD MISBAKHUDIN", asalKelas:"MIS GIWANGRETNO SRUWENG", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"ALIF ACHMAD FIQRI", asalKelas:"SD AYAMPUTIH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"AMRI FAIZAL MUTAMIM", asalKelas:"MIS SULTAN AGUNG 1 KALIPOH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"ARRIDHO FAUHAN PUTRA", asalKelas:"SDN 2 NEGARA AJITUA", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"DIMAS BAYU PAMUNGKAS", asalKelas:"SDN 04 KUWAYUHAN", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"FAQIH ABDURRAHMAN MAWARDI", asalKelas:"SDN NEGERI PENEKET", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"FATAH HUSAIN AL AMIN", asalKelas:"MIS SULTAN AGUNG 2 KALIPOH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"ILYAS SAEFUDIN", asalKelas:"SD NEGERI 2 LUMBU", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"LABIB HABIBI ARROZI ", asalKelas:"SD NEGRI PESALAKAN ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"M.KHILDAN NAUSADZ ANNAJIH", asalKelas:"SDN PAGEDANGAN ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MAULANA SYARIF SAKBAN ", asalKelas:"MI MA'ARIF KEMANGGUAN", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MIFTAKUL ULUM", asalKelas:"MI SULTAN AGUNG WATU KELIR", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMAD ABROR MAULANA", asalKelas:"SD N ROWOREJO", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMAD FAJAR ADZIN", asalKelas:"SDN GANDUL 2", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMAD FATNAM HAFIDZ", asalKelas:"SDN 1 TLOGODEPOK", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD ABIDARR AL GHIFARY", asalKelas:" SD N 2 BANDUNG ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD HABIB AL REVANNO", asalKelas:"UPT SD NEGERI SIMPANG SENDER SELATAN ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD HAFIZ FURQONI", asalKelas:"SDN SRUWOHDUKUH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD HANIF ADZIKRI", asalKelas:"AL HALIMIYAH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD ZIDAN SYAHPUTRA", asalKelas:"SD NEGERI BLENGORKULON", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"MUHAMMAD ZIDANE RAMADHAN ", asalKelas:"SDN MIRIT PETIKUSAN ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"NAIBUL FATA", asalKelas:"MI MAARIF JOJOGAN", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"RAHMAT ALI AKHBAR", asalKelas:"SDN 2 TAMBAKMUYO", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"RAHMAT SYAMSUL ARIFIN ", asalKelas:"SDN SINGOSARI", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"RIFKI MUKHTARULLOH ", asalKelas:"SDN 3 SIDOLUHUR ", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"RISKI WIDIYANTO", asalKelas:"SD NEGERI 1 KARANGKEMBANG", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"SYADDAD ABDURRAHMAN AFIQ ", asalKelas:"MI TARBIYATUL ULUM", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"UMAR SIDIK", asalKelas:"SDN 1 AYAMPUTIH", kelasSekarang:"7B", waliKelas:"Armi Nuridah, S.Pd", waNomor:"6281977731680" },
{ nama:"ACHMAD FAIZUL AL ATAN", asalKelas:"MI NU YAPIKA", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"ADITYA FADILLAH", asalKelas:"MIS MA'ARIF KEMANGGUAN", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"AHMAD MUBAROK", asalKelas:"MIS MA'ARIF WAGIRPANDAN", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"ALIF ARDIANSYAH", asalKelas:"SDN SUROTURUNAN 2", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"ALMAS JA'FARY", asalKelas:"MIS MA'ARIF BANJARSARI", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"ARSYAH SATRIAYADI PUTRA", asalKelas:"MI MA'ARIF JOJOGAN", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"AUFAL MAROM", asalKelas:"SD N 2 LUMBU", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"AZKA HAFIZH AL HADAD MUHAMMAD ", asalKelas:"SDN 02 TERSOBO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"DISTA AJI SAPUTRA ", asalKelas:"SD NEGERI 1 LOGANDU ", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"FANDI ADIANSYAH", asalKelas:"SD NEGERI 1 SRATI", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"FARHAN FAUZIY", asalKelas:"SDS EKA TJIPTA KENCANA MARAU", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"FARREL KHAIRUL ANAM", asalKelas:"-", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"FIRZA ADITYA PRATAMA", asalKelas:"SD N 10 KUNANGAN PARIK RANTANG", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"HUSAIN ANIS ABDILLAH", asalKelas:"SD N 2 TRIKARSO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"ILYAS FIRMANSYAH", asalKelas:"SD NEGERI GADINGPASAR", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"KENZIE GIOVANIE", asalKelas:"SDN 02 LEMBUPURWO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MALIK MUKHAYAT ", asalKelas:"SD NEGERI TAMBAHARJO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MOKHAMAD NAJJIH ADIB AN'NAS", asalKelas:"SD NEGERI 1 KARANGKEMBANG", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MUCHAMAD FATICHUN NADA", asalKelas:"SDN 3 SIDOLUHUR", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MUCHDLOR SYAHRONI", asalKelas:"SD N AYAMPUTIH", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MUHAMAD GHOZIYAFI SYURAIH", asalKelas:"SDN SUMBERADI", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MUHAMAD GILANG SAPUTRA", asalKelas:"MIS MA'ARIF WAGIRPANDAN", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"MUHAMMAD QAIS RAFAEL", asalKelas:"SD NEGRI 2 LUNDONG", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"NURIL ARIFIN", asalKelas:"SD NEGERI ARJOWINANGUN ", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"RIKO AJI PANGESTU", asalKelas:"SD N DUKUHREJO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"RIZAL AZHARI", asalKelas:"SDN ROWOREJO", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"RIZQI GUSTI PUTRA", asalKelas:"MIS SULTAN AGUNG 1 KALIPOH", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"SYAFIQ ALAWY", asalKelas:"SDN BLENGORKULON", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"WASISTO JATI SADONO", asalKelas:"MI NU YAPIKA", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"WILDAN MUSHOFFA AHMAD ", asalKelas:"SDN SINGOSARI ", kelasSekarang:"7C", waliKelas:"Muhammad Arifin, S.Sos", waNomor:"628812409064" },
{ nama:"AGHITSNA QURROTA'AINI", asalKelas:"MIS MA'ARIF KEMANGGUAN", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"ALISA PUTRI OKTAFIANI", asalKelas:"SDN 2 LEMBUPURWO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"AQILA SYIFA PUTRI ROSADI", asalKelas:"MIS MA`ARIF NU MANGUNWENI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"AUREL SILFILIA", asalKelas:"SD N ROWOREJO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"AZAHRA PURWANTI", asalKelas:"SDN3 SIDOLUHUR", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"AZZA KHOLIFATURRIF'AH", asalKelas:"-", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"CELISTA NELVIA AURORA YESHA NURAINI ", asalKelas:"MI MA'ARIF JOJOGAN ", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"EVA RAHMAWATI", asalKelas:"MI SULTAN AGUNG KARANG DUWUR", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"HUSNA FISANGADAH", asalKelas:"SDN 2 BUMIREJO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"ISNA KHUMAEROH ", asalKelas:"MI SULTAN AGUNG KARANG DUWUR ", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"ITSNA MULAZIMATUL HASANAH", asalKelas:"SDN 02 LEMBUPURWO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"KARISA AMELIA ZAHRA", asalKelas:"MIS MA'ARIF WAGIRPANDAN", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"KEYSHA RAMADHANI AZZAHRA", asalKelas:"SD N 2 LEMBUPURWO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"LULU AZKIA NAFISAH", asalKelas:"SDN 1 LUNDONG", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"MARSHA ZAHRA AL FADHILLA", asalKelas:"SDN 1 KUWARISAN", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"MELATI DESTIANI", asalKelas:"SDN 1 BOJONGSARI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"NABILAH SYAFIQOH", asalKelas:"SD NEGERI TEPAKYANG", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"NADA AULIYA SALSABILA", asalKelas:"SD N 2 TANAHSARI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"NAIMA RAHMA AZIZAH", asalKelas:"SD NEGERI 1 BOJONGSARI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"NAURA FAIDA ANAILA", asalKelas:"MIS PLUS JARYUL ULUM", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"RANI FAUZIA NUR AFITA", asalKelas:"SD NEGERI SIDOREJO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"SELVA PUTRI AYU SETIANINGSIH", asalKelas:"SDN BENER KULON", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"SHEILA FANY NURHIDAYAH", asalKelas:"SD NEGERI 2 WAGIRPANDAN", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"SHINTA AULIA RAHMAH", asalKelas:"SDN 1 BOJONGSARI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"SUNIA SA'DA ALFIN", asalKelas:"SD N BLATER ", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"SYIFA LAILA FAUZIYAH", asalKelas:"MADRASAH IBTIDAIYAH SULTAN AGUNG PENIRON", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"VICKY FITRIA ARTANTI", asalKelas:"SDN BENER KULON", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"WAWALINA WIDIASTUTI", asalKelas:"SDN 01 LEMBUPURWO", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"ZAKIYYATUL'ULYA", asalKelas:"MI NURUL SULAIMAN", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"ZULFAH NUR MAULIDDAH", asalKelas:"SDN 1 NOGORAJI", kelasSekarang:"7D", waliKelas:"Wina Agusti Rahayu, S.Pd", waNomor:"6283863390629" },
{ nama:"AISYAH NADIFATUL KHANZA", asalKelas:"MI SULTAN AGUNG WATUKELIR", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ALFIRA RIZQY RAHMAWATI", asalKelas:"MIS MA'ARIF KEMANGGUAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"AMELIA PUTRI RAMADHANI", asalKelas:"MIS MA'ARIF WAGIRPANDAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"AQUINA NILAM CAHYA", asalKelas:"MI ALFATAH SUMBERADI", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ASMA'UL HUSNA", asalKelas:"MI MA'ARIF JOJOGAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ATIQOH APRIYANTI", asalKelas:"SD NEGERI KEDUNGAGUNG", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"AZIZAH NURUL AINY", asalKelas:"SDN 2 LEMBUPURWO", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"CHANIFAH AZ ZAHRAA", asalKelas:"MI MA'ARIF WAGIRPANDAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"DESISKA RAISA ADILA", asalKelas:"SD NEGERI 4 PURBOWANGI", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"DINDA MARDHIYATUZZUHRO", asalKelas:"SD NEGERI 2 SIDOLUHUR", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ERLINA AZNII NAYLA", asalKelas:"SD NEGERI 2 SIDOLUHUR", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"FATMA HAFIVATUL NUR KUMALA", asalKelas:"SDN 2 LEMBUPURWO", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"HASNA NAMILA", asalKelas:"MIS MA'ARIF WAGIRPANDAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"JELITA AYU KIRANA", asalKelas:"MI AL-FATA", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"JIHAN HANIFAH ", asalKelas:"MI ALMASRURIYAH", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"KHOFIFAH INDAH RAMADHANI", asalKelas:"MI MA'ARIF NU CANDIRENGGO", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"LINDA AYU KIRANA", asalKelas:"MI AL-FATA ", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"MAULIDYA AZ ZAHRA ", asalKelas:"SDN 01 AMBALRESMI", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"MEINISA NISFATUN LAILIYAH", asalKelas:"SDN MIRITPETIKUSAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"NABILAH ZAKIYYAH ZULFAA", asalKelas:"SD NEGERI SUROBAYAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"NAIRA FATIH", asalKelas:"MI MA'ARIF JOJOGAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"NASIMAH FARIANTI", asalKelas:"SDN 012 BKT.BESTARI", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"NURIN LUTHFIA NAJWA", asalKelas:"SDN AMBALKLIWONAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ROFI ARINI RAHMAWATI", asalKelas:"SDN 1 BOJONGSARI", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"SELVI PUTRI AYU SETIANINGSIH", asalKelas:"SDN BENER KULON", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"WAFIQ AZIZAH", asalKelas:"MI MA'ARIF JOJOGAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"YASMIN HANIFAH SALMA", asalKelas:"SD N 1 WERGONAYAN", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"YASMIN KHUMAIROH", asalKelas:"SDN  KARANGGINTUNG 07", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
{ nama:"ZULFA SALSABILA", asalKelas:"SD NEGERI 2 LOGANDU", kelasSekarang:"7E", waliKelas:"Siti Maulidah, S.Pd", waNomor:"6281228974217" },
];

const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const resultsEl = document.getElementById('results');
const emptyState = document.getElementById('emptyState');
const emptyQuery = document.getElementById('emptyQuery');
const promptEmpty = document.getElementById('promptEmpty');
const countBadge = document.getElementById('countBadge');
const hero = document.getElementById('hero');

function normalize(str){
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function initials(name){
  return name.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}

function waLink(student){
  const pesan =
`Assalamu'alaikum wr wb.

Saya wali dari ${student.nama}, yang sekarang masuk kelas ${student.kelasSekarang}.

Mohon agar nomor ini, dimasukkan ke grup kelas.

Terimakasih.

Wassalamu'alaikum wr wb`;
  return `https://wa.me/${student.waNomor}?text=${encodeURIComponent(pesan)}`;
}

function renderResults(query){
  resultsEl.innerHTML = '';
  const q = normalize(query.trim());

  if(!q){
    promptEmpty.style.display = 'block';
    emptyState.style.display = 'none';
    countBadge.style.display = 'none';
    hero.classList.remove('compact');
    return;
  }

  hero.classList.add('compact');
  promptEmpty.style.display = 'none';

  const matches = STUDENTS.filter(s => normalize(s.nama).includes(q));

  if(matches.length === 0){
    emptyState.style.display = 'block';
    emptyQuery.textContent = `"${query}"`;
    countBadge.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  countBadge.style.display = 'block';
  countBadge.textContent = `${matches.length} siswa ditemukan`;

  matches.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.innerHTML = `
      <div class="avatar">${initials(s.nama)}</div>
      <div class="info">
        <p class="name">${s.nama}</p>
        <div class="meta">
          <span class="chip">${s.asalKelas}</span>
          <span class="arrow">&#8594;</span>
          <span class="chip now">${s.kelasSekarang} &middot; 2026</span>
        </div>
        <p class="wali">Wali kelas: <span>${s.waliKelas}</span></p>
      </div>
      <a class="wa-btn" href="${waLink(s)}" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.07L2 22l5.1-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.43-4.4-1.19l-.32-.19-2.98.78.8-2.9-.2-.3A7.94 7.94 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.4-5.6c-.24-.12-1.44-.71-1.66-.8-.22-.08-.38-.12-.55.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.31-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/></svg>
        Hubungi Wali Kelas
      </a>
    `;
    resultsEl.appendChild(card);
  });
}

input.addEventListener('input', (e) => {
  clearBtn.classList.toggle('show', e.target.value.length > 0);
  renderResults(e.target.value);
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  clearBtn.classList.remove('show');
  input.focus();
  renderResults('');
});

renderResults('');

/* ==========================================================
   WIDGET CHAT WHATSAPP MENGAMBANG (pojok kanan bawah)
   Ganti nomor di bawah ini dengan nomor WA admin/sekolah tujuan.
   Format: kode negara tanpa "+" (contoh: 62812xxxxxxxx)
   ========================================================== */
const ADMIN_WA_NUMBER = "6285875522018"; // <-- GANTI DENGAN NOMOR WA ADMIN/SEKOLAH

const waFabBtn    = document.getElementById('waFabBtn');
const waChatPopup = document.getElementById('waChatPopup');
const waChatClose = document.getElementById('waChatClose');
const waChatBody  = document.getElementById('waChatBody');
const waChatInput = document.getElementById('waChatInput');
const waChatSend  = document.getElementById('waChatSend');

function openWaChat(){
  waChatPopup.classList.add('open');
  waChatPopup.setAttribute('aria-hidden', 'false');
  waFabBtn.classList.add('active');
  setTimeout(() => waChatInput.focus(), 260);
}

function closeWaChat(){
  waChatPopup.classList.remove('open');
  waChatPopup.setAttribute('aria-hidden', 'true');
  waFabBtn.classList.remove('active');
}

function toggleWaChat(){
  waChatPopup.classList.contains('open') ? closeWaChat() : openWaChat();
}

function appendBubble(text, from){
  const bubble = document.createElement('div');
  bubble.className = `wa-chat-bubble ${from}`;
  bubble.textContent = text;
  waChatBody.appendChild(bubble);
  waChatBody.scrollTop = waChatBody.scrollHeight;
}

function autoGrowInput(){
  waChatInput.style.height = 'auto';
  waChatInput.style.height = Math.min(waChatInput.scrollHeight, 110) + 'px';
}

function sendWaChat(){
  const text = waChatInput.value.trim();
  if(!text){
    waChatInput.focus();
    return;
  }

  appendBubble(text, 'user');
  waChatInput.value = '';
  autoGrowInput();

  const url = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');

  const typing = document.createElement('div');
  typing.className = 'wa-chat-bubble bot typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  waChatBody.appendChild(typing);
  waChatBody.scrollTop = waChatBody.scrollHeight;

  setTimeout(() => {
    typing.remove();
    appendBubble('Terima kasih, pesan Anda sudah diarahkan ke WhatsApp kami. Mohon tunggu balasan dari admin ya 🙏', 'bot');
  }, 900);
}

waFabBtn.addEventListener('click', toggleWaChat);
waChatClose.addEventListener('click', closeWaChat);
waChatSend.addEventListener('click', sendWaChat);

waChatInput.addEventListener('input', autoGrowInput);
waChatInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    sendWaChat();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && waChatPopup.classList.contains('open')) closeWaChat();
});

document.addEventListener('click', (e) => {
  if(waChatPopup.classList.contains('open') &&
     !waChatPopup.contains(e.target) &&
     !waFabBtn.contains(e.target)){
    closeWaChat();
  }
});
