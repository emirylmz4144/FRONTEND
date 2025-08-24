
const color = document.querySelector("#select");  //id=select olan nesne çağrılarak color değişkenine atandı
color.addEventListener('change' ,selectBox); //color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı


 
function selectBox(event) //selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
{
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);

  document.querySelector(".example").style.border="3px solid darkblue"//küçük alanın sınır çizgilerinin tekrar belli olması için
  document.querySelector(".example").style.backgroundColor=event.target.value;//Seçilen rengin ne olduğunu aşağıdaki kutuda gösterecek
 
}
 
let change_document=document.querySelector("#save");
 change_document.addEventListener("click",function()
                                            {
                                              document.querySelector("#selectColor").style.backgroundColor=color.value;
                                              document.querySelector(".example").style="border:0px";//küçük alandaki border çizgisini kaldırmak ve kusursuz görünüm
                                            });
                                            
                                              
  