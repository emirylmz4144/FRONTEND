var myName = prompt("Lütfen adınızı giriniz: ");
myName = myName.toLocaleUpperCase();
document.querySelector("#myName").innerHTML = myName;

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Saat, dakika ve saniye değerlerini istediğiniz şekilde biçimlendirin.
    var timeString = `${Day(new Date().getDay()-1)} Günü ${hours}:${minutes}:${seconds} Saatinde`;
    

    // Saati HTML elementine yazın.
    document.querySelector("#myClock").innerHTML = timeString;
    document.querySelector("#myClock").style.fontSize="40px";

    /*  Bir sonraki çizim döngüsünde güncelleme isteği gönderin. 
      ! Her saniye ekranı güncellemek gereksiz iş yüküdür sayfa açık kaldıkça günceller bu yüzden alternatif çözüm uygulanmadı */
      
    requestAnimationFrame(updateClock);

    /* alternatif çözüm:  setTimeOut(updateClock,1000)  */

}

function Day(day)
{
  var days=["PAZARTESİ","SALI","ÇARŞAMBA","PERŞEMBE","CUMA","CUMARTESİ","PAZAR"]
  return days[day];
}
// İlk çağrıyı yapın.
updateClock();
