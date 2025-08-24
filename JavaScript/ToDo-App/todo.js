




function newElement() {
  let ulDOM = document.querySelector("#list");
  let liDOM = document.createElement('li');
  let user_value = document.querySelector("#task").value;

  if (user_value === "") {
    $("#liveToast2").toast('show');
  } 
  else 
  {
      let liDOM = document.createElement('li');
      liDOM.innerHTML = user_value;
      let deleteElement=deleteButton();
      let checkElement=checkButton();

      liDOM.appendChild(deleteElement);
      liDOM.appendChild(checkElement);

      //Yapılan işin üzerini çizerek belirtiriz
      checkElement.addEventListener('click',function()
      {
        let parentLi = this.parentElement;
        parentLi.style.textDecoration = 'line-through';// li elementinin içeriğini üzerini çizerek göster
        parentLi.style.backgroundColor="lightgreen";

      })

      //Yapılan işi listeden komple silme
      deleteElement.addEventListener('click',function()
      {
        let parentLi=this.parentElement;
        parentLi.remove();
      })
    
    //liDOM.innerHTML+='<svg style="color: rgb(10, 164, 40); position: absolute; top: 50%; right: 30px; transform: translateY(-50%);" xmlns="http://www.w3.org/2000/svg"  width="25" height="30" viewBox="0 0 30 30.000001"  ><defs><clipPath id="id1"><path d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 " clip-rule="nonzero" fill="#0aa428"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#0aa428" d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>'
    
      ulDOM.appendChild(liDOM);
      document.querySelector("#task").value = "";
      $("#liveToast1").toast('show');
  }
}

function deleteElement(event)
{
  let eventSvg=event.target;
  var parentLi=eventSvg.parentElement;
  parentLi.remove();
}


let submitDOM=document.querySelector("#liveToastBtn");
submitDOM.addEventListener('click',newElement())

let deleteDOM=document.getElementsByTagName("svg");
deleteDOM.addEventListener('click',deleteElement());


function checkButton()
{
   // Yeni bir svg elementi oluştur
   var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
   // Özelliklerini setAttribute ile ata
   svgElement.setAttribute("style", "color: rgb(10, 164, 40); position: absolute; top: 50%; right: 30px; transform: translateY(-50%);");
   svgElement.setAttribute("class", "check");
   svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
   svgElement.setAttribute("width", "25");
   svgElement.setAttribute("height", "30");
   svgElement.setAttribute("viewBox", "0 0 30 30.000001");
   
   // Defs elementi oluştur
   var defsElement = document.createElementNS("http://www.w3.org/2000/svg", "defs");
   
   // ClipPath elementi oluştur
   var clipPathElement = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
   clipPathElement.setAttribute("id", "id1");
   
   // Path elementi oluştur
   var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
   pathElement.setAttribute("d", "M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 ");
   pathElement.setAttribute("clip-rule", "nonzero");
   pathElement.setAttribute("fill", "#0aa428");
   
   // ClipPath elementine Path elementini ekle
   clipPathElement.appendChild(pathElement);
   
   // Defs elementine ClipPath elementini ekle
   defsElement.appendChild(clipPathElement);
   
   // G elementi oluştur
   var gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
   gElement.setAttribute("clip-path", "url(#id1)");
   
   // Yeni Path elementi oluştur
   var newPathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
   newPathElement.setAttribute("fill", "#0aa428");
   newPathElement.setAttribute("d", "M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 ");
   newPathElement.setAttribute("fill-opacity", "1");
   newPathElement.setAttribute("fill-rule", "nonzero");
   
   // Yeni Path elementini G elementine ekle
   gElement.appendChild(newPathElement);
   
   // G elementini svg elementine ekle
   svgElement.appendChild(gElement);
   return svgElement;
}

function deleteButton()
{
    // Delete etmek için bir svg oluşturuyoruz
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Özelliklerini setAttribute ile ata
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("class", "delete");
    svgElement.setAttribute("width", "16");
    svgElement.setAttribute("height", "16");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("viewBox", "0 0 16 16");
    svgElement.setAttribute("style", "position: absolute; top: 50%; right: 5px; transform: translateY(-50%);");
    
    // svg elementinin dosya yolunu veriyoruz
    var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M10.293 8l3.853-3.853a1 1 0 1 0-1.414-1.414L8 6.586 4.146 2.733a1 1 0 0 0-1.414 1.414L6.586 8l-3.853 3.853a1 1 0 1 0 1.414 1.414L8 9.414l3.854 3.853a1 1 0 1 0 1.414-1.414L9.414 8z");
    
    // path elementini svg'ye atıyoruz
    svgElement.appendChild(pathElement);
    return svgElement;
}






