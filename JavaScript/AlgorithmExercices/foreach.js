const packages = [
  { name: "Laptop", delivered: true },
  { name: "Telefon", delivered: false },
  { name: "Kitap", delivered: true },
  { name: "Kulaklık", delivered: false },
  { name: "Tablet", delivered: false }
];

console.log("Teslim edilmeyen paketler:");

packages.forEach(pkg => {
  if (!pkg.delivered) {
    console.log(`${pkg.name} teslim edilmedi`);
  }
});
