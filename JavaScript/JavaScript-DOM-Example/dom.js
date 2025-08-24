function add_value()
{
   var list=document.querySelector("#ul-list");//Eklenecek liste seçilir
   var our_value=document.querySelector("#our-value");//Listeye eklenecek eleman inputtaki veriden alınır
   var elements=document.createElement("li");//Html DOM için hazırlanacak element türü hazırlanır

   elements.textContent=our_value.value;//hazırlanan element türü eklenecek olan inputtaki veri değeri ile eşleştirilir

   if(our_value.value=="")//Kullanıcının değer girdiğinden emin olunur
   {
    alert("Lütfen bir değer giriniz..")
   }
   else
   {
    list.append(elements);//Eleman eklenir
   }
  

   document.querySelector("#our-value").value="";//İnput değer boşaltılır
}

var add=document.querySelector("#submit");//Ekleme işleminin hangi HTML DOM elemanından olunacağı belirtilir
add.addEventListener('click',function(){add_value()})//İlgili html DOM elemanına JavaScript dosyasından ulaşılır ve yapacağı eylem aktarılır