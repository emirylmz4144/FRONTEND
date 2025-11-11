const users = [
    {
        name: "Emir Yılmaz",
        logins: [
            { device: "PC", secure: true, ip: "192.168.1.10", success: true },
            { device: "Mobile", secure: true, ip: "192.168.1.15", success: true }
        ]
    },
    {
        name: "Tuğba Çöllü",
        logins: [
            { device: "PC", secure: false, ip: "10.0.0.4", success: true },
            { device: "Mobile", secure: true, ip: "10.0.0.5", success: true }
        ]
    },
    {
        name: "Yaren Almas",
        logins: [
            { device: "PC", secure: true, ip: "172.16.0.8", success: false },
            { device: "Tablet", secure: true, ip: "172.16.0.9", success: true }
        ]
    }
]

users.forEach(user => {

    const allSecure = user.logins.every(l => l.secure === true)
    const anyFailed = user.logins.some(l => l.success === false)

    let status = ""

    if (allSecure && !anyFailed) {
        status = "Güvenli Kullanıcı"
    } 
    else if (anyFailed) {
        status = "Riskli Kullanıcı (başarısız giriş var)"
    } 
    else {
        status = "Orta Seviye (bazı cihazlar doğrulanmamış)"
    }

    console.log(JSON.stringify({ user: user.name, status: status }))
    console.log("\n")
})
