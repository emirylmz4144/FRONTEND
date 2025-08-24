// Klavyeden bir tuşa basıldığında çalışacak olan fonksiyon
window.addEventListener('keydown', playSound);


let currentAudio;// Mevcut çalan ses dosyasını tutmak için bir değişken 

function playSound(e) {

 
       if (currentAudio) // Eğer mevcut çalan ses dosyası varsa durdur
       {
          currentAudio.pause();
          currentAudio.currentTime = 0;
       }
  
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Basılan tuşa karşılık gelen ses dosyasını seç
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);// Basılan tuşa karşılık gelen drum pad'i seç
  
      if (!audio) return;// Ses dosyası var mı kontrol et yoksa fonksiyonu bitir.

  
     audio.currentTime = 0;// Mevcut çalan ses dosyasına ait tuşa basılırsa ona ait sesi baştan başlat
     audio.play();//Ses dosyasını oynat

  
      currentAudio = audio;// Mevcut çalan ses dosyasını güncelle (başka bir tuşa basılırsa mevcut çalanı anlasın ve durdursun)

     
     key.classList.add('playing');// Drum pad'e 'playing' class'ını ekle (animasyon ve stiller için)
 
     const keys=document.querySelectorAll('.key');//'animasyonu durdurmak için keyleri seçiyor'
     keys.forEach(key=>key.addEventListener('transitionend',removeTransition))// Animasyonlar çalışıyor ve çalıştıktan sonra siliniyor
  
      
 
      function removeTransition(e)
     {
      
      if(e.propertyName!=='transform') return;//transform içeren bir key değilse(tanımlanan tuşlardan değilse) fonksiyonu durdur
      this.classList.remove('playing');//Çalıştıktan sonra animasyonu sağlayan playing sınıfını sil
     }
 
}