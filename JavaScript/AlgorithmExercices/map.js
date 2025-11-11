const drivers = [
    {
        name: "Emir Yılmaz",
        deliveries: [
            { destination: "Kadıköy", distance: 10, delivered: true, late: false },
            { destination: "Ataşehir", distance: 15, delivered: true, late: true },
            { destination: "Üsküdar", distance: 8, delivered: false, late: false }
        ]
    },
    {
        name: "Zeynep Yaren Keskin",
        deliveries: [
            { destination: "Beşiktaş", distance: 12, delivered: true, late: false },
            { destination: "Sarıyer", distance: 20, delivered: true, late: false },
            { destination: "Şişli", distance: 7, delivered: true, late: false },
            { destination: "Kağıthane", distance: 9, delivered: true, late: true }
        ]
    },
    {
        name: "Yaren Almas",
        deliveries: [
            { destination: "Bakırköy", distance: 11, delivered: false, late: false },
            { destination: "Avcılar", distance: 25, delivered: true, late: false },
            { destination: "Esenyurt", distance: 17, delivered: true, late: true }
        ]
    }
];


const driverReports = drivers.map(driver => {
    let total = driver.deliveries.length;
    let delivered = 0;
    let late = 0;


    driver.deliveries.forEach(delivery => {
        if (delivery.delivered) delivered++;
        if (delivery.late) late++;
    });

    const performanceScore = ((delivered / total) * 100 - late * 10).toFixed(1);
    const bonus = performanceScore > 80 ? 1500 : performanceScore > 60 ? 1000 : 0;

    return {
        driver: driver.name,
        totalDeliveries: total,
        deliveredCount: delivered,
        lateCount: late,
        performanceScore: performanceScore,
        suggestedBonus: `${bonus} TL`
    };
});


console.log("=== Günlük Sürücü Performans Raporu ===\n\n");

driverReports.forEach(report => {
    console.log(JSON.stringify(report))
    console.log("\n\n")
}

);
