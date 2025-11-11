let createElement=(count)=>{

    let parent=document.querySelector(".conteiner")
    let list=document.createElement("ul")

    parent.insertAdjacentElement("beforeend",list)

    for(let i=0;i<count;i++){
        let listElement=document.createElement("li")
        listElement.setAttribute("class","listElement")
        listElement.textContent=i
        calculateColor(listElement)
        list.appendChild(listElement)
    }
}

let calculateColor=(element) =>{
    let number=parseInt(element.innerText)
    if(number%2==0)
        element.style.backgroundColor="green"
    else if(isPrime(number)){
        element.style.backgroundColor="red" 
    }
    else
        element.style.backgroundColor="yellow"
}

function isPrime(num) {
  if (num <= 1) return false;          
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;     
  }
  return true;                         
}

createElement(100)