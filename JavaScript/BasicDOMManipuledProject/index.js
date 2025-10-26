// container'ı seç ve ekranın ortasına yerleştir
const container = document.querySelector('div');
container.style.cssText = `
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// h1 içeriğini parçala, son kelimeyi span içine al
const firstH1 = document.querySelector('h1');
const words = firstH1.innerText.trim().split(" ");

const span = document.createElement('span');
span.innerText = words.pop(); // son kelime

firstH1.innerText = words.join(" "); // kalan kelimeler
firstH1.appendChild(span); // span'ı ekle

// h2'nin altına h3 oluştur
const h2Element = document.querySelector('h2');
const h3Element = document.createElement('h3');
h2Element.insertAdjacentElement('afterend', h3Element);

// Tarih ve saat formatlayıcı
function formatDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear().toString().slice(-2);
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

// Rastgele renk üretici
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Her saniyede tarih güncelle ve renk değiştir
setInterval(() => {
  h3Element.textContent = formatDate();
  h3Element.style.color = getRandomColor();
  span.style.color = getRandomColor();
}, 1000);

let allLi=document.querySelectorAll('li')

for(let element of allLi){
    let words = element.innerText.trim().split(" ");
    
    words=words.map(element=>element=element.toLowerCase())
    console.log(words[words.length-1])
    if(words[words.length-1]=='done'){
        element.style.backgroundColor='green'
    }
    else if(words[words.length-1]=='ongoing'){
        element.style.backgroundColor='yellow'
    }
    else{
        element.style.backgroundColor='red'
    }
}