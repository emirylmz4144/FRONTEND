const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

// veri göndermek için items varsa verileri JSON'a parse ederek al  yoksa   items dizisi oluştur
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

/*
 items dizisine veriler json formatına dönüştürerek gönder
 !eğer yoksa ise items adında bir local stroge oluştur
 */
localStorage.setItem('items', JSON.stringify(itemsArray));
//web localdaki verileri almak için data adında bir değişken oluşturulur
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  
  itemsArray.push(input.value);//items array'e veri ekler

  localStorage.setItem('items', JSON.stringify(itemsArray));//veri eklendikten sonra localStroge'ye tekrar gönderilir
  liMaker(input.value);//Webde görünmesi için ul içerisine aktarılır
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});