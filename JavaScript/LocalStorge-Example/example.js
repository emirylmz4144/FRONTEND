
//localStrogede var olan değişken counter değerine atandı
var counter=localStorage.getItem('number') ? Number(localStorage.getItem('number')) :0;

//değişkenin parametresi kendisi oldu
var strogeCounter=localStorage.setItem('number',counter);

//işlemler için butonlar atandı
var counterDOM=document.querySelector("#our-value");
var increase=document.querySelector("#increase");
var decrease=document.querySelector("#decrease");

counterDOM.innerHTML=counter;

increase.addEventListener('click',valueOperations);
decrease.addEventListener('click',valueOperations);

function valueOperations()
{
   this.id==="increase" ? counter++ : counter-=1;
   localStorage.setItem('number',counter);
   counterDOM.innerHTML=counter;
}