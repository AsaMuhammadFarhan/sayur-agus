type Menu = {
  name: string;
  description?: string;
  image?: string;
  price: number;
};

const vegetables: Menu[] = [
  {
    name: "Tahu",
    price: 5000,
  },
  {
    name: "Tempe",
    price: 5000,
  },
  {
    name: "Bayam",
    price: 6000,
  },
  {
    name: "Bayam Potong",
    price: 3000,
  },
  {
    name: "Sawi",
    price: 3000,
  },
  {
    name: "Kembang Kol",
    price: 5000,
  },
  {
    name: "Tomat",
    price: 7000,
  },
  {
    name: "Pare setengah kilo",
    description: "1/2 Kg",
    price: 5000,
  },
  {
    name: "Gambas setengah kilo",
    description: "1/2 Kg",
    price: 5000,
  },
  {
    name: "Kacang Panjang",
    description: "1 Kg",
    price: 10000,
  },
  {
    name: "Brocoli",
    description: "1 Kg",
    price: 15000,
  },
  {
    name: "Kembang Kol sekilo",
    description: "1 Kg",
    price: 12000,
  },
  {
    name: "Bawang Merah",
    description: "1 Kg",
    price: 30000,
  },
  {
    name: "Bawang Putih",
    description: "1 Kg",
    price: 38000,
  },
  {
    name: "Buncis",
    description: "1 Kg",
    price: 7000,
  },
  {
    name: "Kangkung 1 ikat",
    price: 4000,
  },
  {
    name: "Cabe Merah",
    price: 30000,
  },
  {
    name: "Cabe Rawit",
    price: 32000,
  },
  {
    name: "Kentang",
    price: 16000,
  },
  {
    name: "Wortel",
    price: 12000,
  },
  {
    name: "Sop sopan",
    price: 2000,
  },
  {
    name: "Cambah",
    description: "1 Kg",
    price: 14000,
  },
  {
    name: "Onclang",
    description: "1 Kg",
    price: 15000,
  },
  {
    name: "Sawi Cendok",
    price: 3000,
  },
  {
    name: "Slobor",
    price: 4000,
  },
];

const meats: Menu[] = [
  {
    name: "Ayam sekilo",
    description: "1 Kg",
    price: 32000,
  },
  {
    name: "Ayam setengah kilo",
    description: "1/2 Kg",
    price: 16000,
  },
  {
    name: "Lele",
    description: "1 Kg",
    price: 24000,
  },
  {
    name: "Ikan Salem",
    description: "1 Kg",
    price: 8000,
  },
  {
    name: "Ceker",
    price: 17000,
  },
  {
    name: "Ati Ayam",
    price: 20000,
  },
  {
    name: "Kepala",
    price: 17000,
  },
  {
    name: "Telur",
    description: "1 Kg",
    price: 50000,
  },
];

const menu = [
  ...vegetables.map((veg) => ({ ...veg, category: 0 })),
  ...meats.map((meat) => ({ ...meat, category: 1 })),
];

export default menu;
