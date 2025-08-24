let formSucessDOM=document.querySelector("#userForm");
formSucessDOM.addEventListener("submit",formSubmit);

let userList=document.querySelector("#userList");

let gonnaAlert=(important,message,className="danger")=>
`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${important} </strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;


const ALERT=document.querySelector("#alert");

function formSubmit(event)
{
    event.preventDefault();
   
    const E_MAİL=document.querySelector("#email");
    const PASSWORD=document.querySelector("#password");

    if(!(E_MAİL.value===''|| PASSWORD.value===''))
    {
        addToList(E_MAİL.value,PASSWORD.value)  
        ALERT.innerHTML=gonnaAlert("Tebrikler! ","Form gönderme işlemi başarılı","success");
    }
    else
    {
        ALERT.innerHTML=gonnaAlert("HATALI GİRİŞ! ","Lütfen formu göndermek için boşlukları doldurun");
    }
    E_MAİL.value='';
    PASSWORD.value='';
}

function addToList(email,password)
{
    let liDOM = document.createElement("li");
    liDOM.setAttribute("class", "list-group-item list-group-item-action list-group-item-success");
    liDOM.setAttribute("style", "display: flex;");//position absolute gibi yapıları kullanabilmek için en üstteki ebeveyn kutuya flex özelliği yapmalıyız
    
    let emailSpan = document.createElement("span");
    emailSpan.setAttribute("style", "flex-grow: 1;");//Birinin en sol birinin en sağa yaslanması için css flexbox özelliği bu sayade kullanılmıştır
    emailSpan.innerHTML = document.querySelector("#email").value;
    
    let passwordSpan = document.createElement("span");
    passwordSpan.setAttribute("style", "margin-left: auto;");
    passwordSpan.innerHTML = document.querySelector("#password").value;
    
    liDOM.appendChild(emailSpan);
    liDOM.appendChild(passwordSpan);
    userList.appendChild(liDOM);
}

const arr=(item)=>


