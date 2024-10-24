const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');

const namaPendek = [
    "Ayu", "Budi", "Caca", "Deni", "Eko",
    "Fani", "Gita", "Hani", "Ika", "Joko",
    "Kiki", "Lala", "Mimi", "Nana", "Oki",
    "Pina", "Qori", "Rina", "Sari", "Tina",
    "Uli", "Vina", "Wira", "Yani", "Zara",
    "Adit", "Bima", "Cahya", "Dira", "Eka",
    "Fajar", "Gerry", "Hendra", "Indra", "Juli",
    "Kris", "Luki", "Mika", "Nino", "Omar",
    "Pandu", "Qisya", "Rafi", "Sena", "Tio",
    "Uzi", "Vino", "Wira", "Yusuf", "Zain",
    "Aira", "Bela", "Cici", "Dara", "Elyn",
    "Fira", "Geni", "Hilda", "Ilma", "Jeni",
    "Kira", "Lani", "Mira", "Nia", "Ocha",
    "Pipi", "Qiana", "Rika", "Sisi", "Tata",
    "Ucha", "Vela", "Wani", "Yuli", "Zizi",
    "Agus", "Beni", "Ceri", "Dian", "Evan",
    "Fera", "Gigi", "Hilda", "Indi", "Jani",
    "Kina", "Lina", "Maya", "Nika", "Olin",
    "Pena", "Qori", "Romy", "Siti", "Tari",
    "Ulan", "Vera", "Wati", "Yani", "Zul",
    "Abdi", "Bora", "Cris", "Diko", "Echa",
    "Fauzi", "Gina", "Hana", "Ismi", "Jira",
    "Karo", "Lora", "Maya", "Novi", "Olin",
    "Putu", "Qila", "Rhea", "Suma", "Tika",
    "Ulan", "Vira", "Wani", "Yuda", "Zara",
    "Aina", "Bela", "Ciko", "Dimi", "Eko",
    "Fira", "Gina", "Hani", "Indra", "Joko",
    "Kiki", "Lala", "Mimi", "Nani", "Odi",
    "Pita", "Qila", "Rudi", "Sari", "Tata",
    "Uli", "Vina", "Wira", "Yuli", "Zara",
    "Alif", "Brahma", "Cindra", "Dito", "Elok",
    "Fikri", "Galih", "Hana", "Iman", "Joko",
    "Karo", "Luca", "Mira", "Nico", "Oka",
    "Pandu", "Qisya", "Rani", "Sila", "Toni",
    "Uta", "Vira", "Wira", "Yudi", "Zara",
    "Aira", "Beni", "Ciri", "Doni", "Ely",
    "Fira", "Gian", "Hadi", "Indra", "Joni",
    "Kiki", "Lia", "Meli", "Nisa", "Oki",
    "Peli", "Qara", "Rudi", "Sari", "Tama",
    "Uli", "Vira", "Wina", "Yogi", "Zain"
];


// Fungsi untuk menghasilkan data acak
function generateRandomData(nama) {
  return {
    name: nama, // Use faker.person instead of faker.name
    opinion1: faker.helpers.arrayElement(['Sangat bersih', 'Cukup bersih', 'Kurang bersih', 'Tidak bersih sama sekali']),
    opinion2: faker.helpers.arrayElement(['Tidak pernah', 'Jarang', 'Sering', 'Sangat sering']),
    opinion3: faker.helpers.arrayElement(['Tidak berdampak', 'Berdampak sedikit', 'Berdampak cukup signifikan', 'Berdampak sangat signifikan']),
    opinion4: faker.helpers.arrayElement(['Sangat bersih.', 'Cukup bersih.', 'Kurang bersih.', 'Sangat kotor.']),
    opinion5: faker.helpers.arrayElement(['Selalu kesulitan', 'Sering kesulitan', 'Kadang-kadang kesulitan', 'Tidak kesulitan sama sekali']),
    opinion6: faker.helpers.arrayElement(['Tidak ada peningkatan', 'Tidak terlalu meningkat', 'Sedikit meningkat', 'Ya, sangat meningkat']),
    opinion7: faker.helpers.arrayElement(['Tidak berdampak sama sekali.', 'Tidak terlalu berdampak.', 'Berdampak sedikit.', 'Ya, sangat berdampak.']),
    opinion8: faker.helpers.arrayElement(['Sangat tidak mencukupi', 'Kurang mencukupi', 'Cukup mencukupi', 'Sangat mencukupi']),
    opinion9: faker.helpers.arrayElement(['Sangat tidak setuju', 'Tidak setuju', 'Setuju', 'Sangat setuju']),
    opinion10: faker.helpers.arrayElement(['Tidak ada pengaruh', 'Kecil', 'Cukup besar', 'Sangat besar']),
    opinion11: faker.helpers.arrayElement(['Tidak tahu.', 'Tidak pernah.', 'Ya, sesekali.', 'Ya, secara rutin.']),
    opinion12: faker.helpers.arrayElement(['Tidak pernah membawa pulang', 'Kadang-kadang membawa pulang', 'Sering membawa pulang', 'Ya, selalu membawa pulang']),
    opinion13: faker.helpers.arrayElement(['Tidak peduli sama sekali', 'Kurang peduli', 'Tetap sama', 'Lebih peduli']),
    opinion14: faker.helpers.arrayElement(['Tidak merasa sama sekali', 'Tidak terlalu merasa', 'Cukup merasa', 'Sangat merasa']),
    opinion15: faker.helpers.arrayElement(['Tidak penting sama sekali', 'Tidak terlalu penting', 'Cukup penting', 'Sangat penting']),
    opinion16: faker.helpers.arrayElement(['Ruang kelas', 'Lorong-lorong sekolah', 'Kantin', 'Lapangan/taman']),
    opinion17: faker.helpers.arrayElement(['Sangat tidak setuju.', 'Tidak setuju.', 'Setuju.', 'Sangat setuju.']),
    
    opinion18: faker.helpers.arrayElement(['Tidak bersih sama sekali', 'Kurang bersih', 'Cukup bersih', 'Sangat bersih']),
    opinion19: faker.helpers.arrayElement(['Selalu', 'Sering', 'Kadang-kadang', 'Tidak sama sekali']),
    opinion20: faker.helpers.arrayElement(['Sangat sering.', 'Sering.', 'Jarang.', 'Tidak pernah.,']),
    opinion21: faker.helpers.arrayElement(['Berdampak sangat signifikan', 'Berdampak cukup signifikan', 'Berdampak sedikit', 'Tidak berdampak']),
    opinion22: faker.helpers.arrayElement(['Tidak peduli sama sekali', 'Tidak terlalu peduli', 'Sedikit lebih peduli', 'Ya, sangat peduli']),
    opinion23: faker.helpers.arrayElement(['Sangat rendah', 'Rendah', 'Cukup tinggi', 'Sangat tinggi']),
    opinion24: faker.helpers.arrayElement(['Tidak mencukupi sama sekali', 'Kurang mencukupi', 'Cukup mencukupi', 'Sangat mencukupi']),
    opinion25: faker.helpers.arrayElement(['Tidak mempengaruhi sama sekali', 'Tidak terlalu mempengaruhi', 'Ya, sedikit mempengaruhi', 'Ya, sangat mempengaruhi']),
    opinion26: faker.helpers.arrayElement(['Sangat sering,', 'Sering,', 'Jarang,', 'Tidak pernah,']),
    opinion27: faker.helpers.arrayElement(['Tidak peduli', 'Kurang tegas', 'Sama saja seperti sebelumnya', 'Lebih tegas']),
    opinion28: faker.helpers.arrayElement(['Tidak pernah`', 'Jarang`', 'Kadang-kadang`', 'Ya, sering`']),
    opinion29: faker.helpers.arrayElement(['Tidak pernah.`', 'Kadang-kadang.`', 'Sering.`', 'Selalu.`']),
    opinion30: faker.helpers.arrayElement(['Udara malah lebih segar', 'Tidak ada perubahan', 'Ya, sedikit lebih buruk', 'Ya, jauh lebih buruk']),
    opinion31: faker.helpers.arrayElement(['Tidak pernah,`', 'Jarang,`', 'Kadang-kadang,`', 'Ya, selalu,`']),
    opinion32: faker.helpers.arrayElement(['Saya tidak pernah memilah sampah', 'Membuat saya lebih jarang memilah', 'Tidak ada pengaruh', 'Membuat saya lebih rajin memilah']),
    opinion33: faker.helpers.arrayElement(['Tidak pernah..', 'Jarang..', 'Sering..', 'Sangat sering..']),
    opinion34: faker.helpers.arrayElement(['Tidak ada pengaruh.', 'Kecil.', 'Cukup besar.', 'Sangat besar.']),
}
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function fillGoogleForm(nama) {
  const randomData = generateRandomData(nama); // Menghasilkan data acak

  // URL Google Form yang ingin diisi
  const formUrl = 'https://forms.gle/LCxFDHMXHfoABtMw9';

  // Meluncurkan browser
  const browser = await puppeteer.launch({ headless: false }); // headless: false agar terlihat prosesnya
  const page = await browser.newPage();

  // Membuka Google Form
  await page.goto(formUrl, { waitUntil: 'networkidle2' });

  // Mengisi Nama (dengan data acak)
  await page.type('input[aria-labelledby="i1"]', randomData.name);

  // Mengisi pilihan pada pertanyaan multiple choice, dengan data acak
  await page.click(`div[data-value="${randomData.opinion1}"]`);
  await page.click(`div[data-value="${randomData.opinion2}"]`);
  await page.click(`div[data-value="${randomData.opinion3}"]`);
  await page.click(`div[data-value="${randomData.opinion4}"]`);
  await page.click(`div[data-value="${randomData.opinion5}"]`);
  await page.click(`div[data-value="${randomData.opinion6}"]`);
  await page.click(`div[data-value="${randomData.opinion7}"]`);
  await page.click(`div[data-value="${randomData.opinion8}"]`);
  await page.click(`div[data-value="${randomData.opinion9}"]`);
  await page.click(`div[data-value="${randomData.opinion10}"]`);
  await page.click(`div[data-value="${randomData.opinion11}"]`);
  await page.click(`div[data-value="${randomData.opinion12}"]`);
  await page.click(`div[data-value="${randomData.opinion13}"]`);
  await page.click(`div[data-value="${randomData.opinion14}"]`);
  await page.click(`div[data-value="${randomData.opinion15}"]`);
  await page.click(`div[data-value="${randomData.opinion16}"]`);
  await page.click(`div[data-value="${randomData.opinion17}"]`);
//   Next Page
  await page.click(`div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]`);
  await page.waitForNavigation();

  await page.click(`div[data-value="${randomData.opinion18}"]`);
  await page.click(`div[data-value="${randomData.opinion19}"]`);
  await page.click(`div[data-value="${randomData.opinion20}"]`);
  await page.click(`div[data-value="${randomData.opinion21}"]`);
  await page.click(`div[data-value="${randomData.opinion22}"]`);
  await page.click(`div[data-value="${randomData.opinion23}"]`);
  await page.click(`div[data-value="${randomData.opinion24}"]`);
  await page.click(`div[data-value="${randomData.opinion25}"]`);
  await page.click(`div[data-value="${randomData.opinion26}"]`);
  await page.click(`div[data-value="${randomData.opinion27}"]`);
  await page.click(`div[data-value="${randomData.opinion28}"]`);
  await page.click(`div[data-value="${randomData.opinion29}"]`);
  await page.click(`div[data-value="${randomData.opinion30}"]`);
  await page.click(`div[data-value="${randomData.opinion31}"]`);
  await page.click(`div[data-value="${randomData.opinion32}"]`);
  await page.click(`div[data-value="${randomData.opinion33}"]`);
  await page.click(`div[data-value="${randomData.opinion34}"]`);

  
  await page.click(`div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]`);
  await delay(2000);

  // Lanjutkan untuk pertanyaan lainnya dengan cara serupa...

  // Mengirimkan form
//   await page.click('span[class="appsMaterialWizButtonPaperbuttonLabel"]');

  // Tunggu beberapa detik sebelum menutup browser
//   await page.waitForTimeout(5000);

  // Tutup browser
  await browser.close();
}

(async () => {
    for (let i = 33; i < 47; i++) {
        const nama = namaPendek[i];
        await fillGoogleForm(nama);
      }
    
})();
