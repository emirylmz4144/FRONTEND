const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];



const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]




function logInOrSignUp() {
    let whatDoYouWantTo = prompt("Ne yapmak istersiniz \n(1) giriş yapmak\n(2)kayıt olmak")
    while (true){
        if(whatDoYouWantTo==1||whatDoYouWantTo==2)break
        whatDoYouWantTo=prompt("Lütfen geçerli seçim yapınız")
    } 
    let choice = whatDoYouWantTo.trim()
    let user;
    choice==1 ? user=LogIn(): user=signUp()
    return user;

}


let LogIn = function () {
    let userName = prompt("Lütfen adınızı giriniz: ")
    let userPassword = prompt("Lütfen şifrenizi giriniz: ")
    let user = check(LogIn, userName, '', userPassword)
    return user;
}

let signUp = function () {
    let userName = prompt("Lütfen kullanıcı adınızı giriniz")
    let eMail = prompt("Lütfen email adresinizi giriniz: ")
    password = prompt("Lütfen şifrenizi giriniz")

    let user = check(signUp, userName, eMail, password)

    if (user != null) {
        users.push(user)
        alert("Kullanıcı başarılı bir şekilde kaydedildi")
    }
    return user;
}

function check(from, _username, _email, _password = '') {
    if (from === LogIn) {
        const user = users.find(u => u.username === _username);

        if (!user) return null;                  // kullanıcı yok
        if (user.password !== _password) {
            alert("Şifre yanlış");
            console.log(user)
            return null;
        }

        user.isLoggedIn = true;
        console.log(user)
        return user;

    }


    if (from === signUp) {
        const user = users.find(u => u.username === _username || u.email === _email)
        if (user) {
            alert("Böyle bir kullanıcı zaten bulunmakta")
            console.log(user)
            return null;
        }
        else {
            let user = {
                _id: createId(),
                username: _username,
                email: _email,
                password: _password,
                createdAt: formatDateWithMorningOrEvening(new Date),
                isLoggedIn: true
            }
            console.log(user)
            return user
        }
    }
}

function selectProduct() {
    let idNumber = prompt("Lütfen ürün id numarasını giriniz")
    let product = products.find(prdc => prdc._id === idNumber);
    console.log(product)
    return product;
}

function getAvarageOfProduct(product, userId, rate) {
    if (!product || !product.ratings) return null
    let avarageOfRate = 0;
    for (let i = 0; i < product.ratings.length; i++) {
        avarageOfRate += product.ratings[i].rate
    }
    avarageOfRate = (avarageOfRate / product.ratings.length).toFixed(2)
    product.ratings.push({ userId: userId, rate: rate })

    let nowAvarageOfRate = 0;
    for (let i = 0; i < product.ratings.length; i++) {
        nowAvarageOfRate += product.ratings[i].rate
    }
    nowAvarageOfRate = (nowAvarageOfRate / product.ratings.length).toFixed(2)
    alert(`Ürünün önceki puanı ${avarageOfRate} iken sizin verdiğiniz ${rate} puanı ile güncel puan ortalaması ${nowAvarageOfRate} oldu`)
    console.log(product)
}

function askRatingProduct() {
    let input = prompt("Lütfen 1-10 arasında bir sayı giriniz");
    if (input === null) return null;
    let rating = parseFloat(input.replace(',', '.'));
    while (isNaN(rating) || rating < 1 || rating > 10) {
        const again = prompt("Geçersiz giriş. Lütfen 1-10 arasında bir sayı giriniz");
        if (again === null) return null;
        rating = parseFloat(again.replace(',', '.'));
    }
    return rating;
}

function asLikeProduct(product, user) {
    let input = prompt("Ürünün beğendiyseniz (EVET) beğenmediyseniz (HAYIR) yazınız")
    if (input == null) return null
    input = input.toUpperCase()
    while (true) {
        if(input == 'EVET' || input == 'HAYIR' || input != null) break
        alert("Lütfen geçerli bir seçim giriniz")
        input = prompt("Ürünün beğendiyseniz (EVET) beğenmediyseniz (HAYIR) yazınız")
    }
    if (input == 'EVET') {
        if (!product.likes.includes(user._id)) {
            product.likes.push(user._id)
            alert("Ürünü beğendiniz")
            console.log(product)
        }
        else {
            let removeLike = confirm("Ürünü daha önce beğendiniz beğeniyi geri almak istermisiniz")
            if (removeLike === true) product.likes = product.likes.filter(like => like !== user._id)
            else alert("Beğeniyi geri alma işlemi iptal edilidi")
        console.log(product)
        }
    }
    if (input == 'HAYIR') {
        alert("Beğenme işlemi iptal edildi")
    }

}

function likeOrRate() {
    let user = logInOrSignUp()
    if (user != null) {
        let product = selectProduct()
        if (product != null) {
            let choose = prompt("Ürünü puanlamak için(1) beğenmek için(2) tuşlama yapın")
            if (choose == 1) {
                let rating = askRatingProduct()
                getAvarageOfProduct(product, user._id, rating)
            }
            else if (choose == 2) asLikeProduct(product, user)
            else alert("Lütfen geçerli bir seçim yapınız")

        }
        else alert("Ürün bulunamadı")

    }
    else alert("Kullanıcı bulunamadı veya var olan kullanıcıya ait giriş bilgileri ile kayıt denendi")

}


function formatDateWithMorningOrEvening(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const morningOrEvening = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // 0 -> 12
    return `${day}/${month}/${year} ${hours}:${minutes} ${morningOrEvening}`;
}

function createId() {
    let createId = "0123456789abcdefghyzxmtls"
    let id = ''
    for (let i = 0; i < 6; i++) {
        id += createId[Math.floor(Math.random() * 25)]
    }
    return id;
}


likeOrRate()


