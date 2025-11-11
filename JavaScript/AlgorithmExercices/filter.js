const deliveries = [
  { driver: "Emir Yılmaz", distance: 12, delivered: true, late: false, date: "2025-11-08" },
  { driver: "Tuğba Çöllü", distance: 5, delivered: true, late: false, date: "2025-11-03" },
  { driver: "Yaren Almas", distance: 15, delivered: true, late: false, date: "2025-11-09" },
  { driver: "Zeynep Yaren Keskin", distance: 22, delivered: true, late: true, date: "2025-11-07" },
  { driver: "Nurseray Özoğlu", distance: 18, delivered: false, late: false, date: "2025-11-06" }
];


const now = new Date();


const filteredDeliveries = deliveries.filter(delivery => {
  const deliveryDate = new Date(delivery.date);
  const daysDiff = (now - deliveryDate) / (1000 * 60 * 60 * 24);
  return (
    daysDiff <= 7 &&
    delivery.delivered === true &&
    delivery.late === false &&
    delivery.distance >= 10
  );
});

const driverReports = filteredDeliveries.map(d => ({
  driver: d.driver,
  distance: `${d.distance} km`,
  date: d.date,
  status: "Başarılı Teslimat"
}));


console.log("Raporlanması istenen teslimatlar \n\n");
driverReports.forEach(report => 
    {
        console.log(JSON.stringify(report))
        console.log("\n\n")
    });
