const attempts = [
    { user: "emir", time: "2025-11-09T08:00:00Z", success: true },
    { user: "emir", time: "2025-11-09T08:15:00Z", success: false },
    { user: "emir", time: "2025-11-09T08:20:00Z", success: true },
    { user: "emir", time: "2025-11-10T09:00:00Z", success: false },
    { user: "emir", time: "2025-11-10T09:05:00Z", success: false },
    { user: "emir", time: "2025-11-10T09:10:00Z", success: true },
];

const revIndex = attempts.slice().reverse().findIndex(a => a.success === false);

if (revIndex === -1) {
    console.log("Hiç başarısız giriş yok.");
    console.log("\n\n");
} else {
    const lastFailedIndex = attempts.length - 1 - revIndex;
    const sequenceFromLastFail = attempts.slice(lastFailedIndex);

    console.log("Son yanlış giriş index'i: " + lastFailedIndex);
    console.log("\nSon yanlış giriş ve sonrası\n");
    sequenceFromLastFail.forEach(item => {
        console.log(JSON.stringify(item));
        console.log("\n");
    });
}
