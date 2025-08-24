let array = [2,5,8,11,15,17];
const newArray=array.filter((number)=>number>10).map((number)=>number*5);
console.log(newArray)

function isExcept(array)
{
    let arr=Array(array);
    if(arr.every((number)=>number<5))
       console.log("Sayıların hepsi 5'ten küçük");
    else
       console.log("Sayılar arasında 5'ten büyük bir sayı var");
    
}
isExcept(array);


function forReduce(acumulator,sayi)
{
    return acumulator+sayi;
}

let sum=array.reduce(forReduce,0)//sayiların toplamı
console.log(sum);

sum=array.reduce(forReduce,10);//sayiların toplamının 10 fazlası
console.log(sum);


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];

    const isAge=person.filter(p=>p.age>30);
    isAge.forEach(p=>{console.log(p)});

    const mustLanguage=person.filter((p)=>p.languages.includes("JavaScript"));
    mustLanguage.forEach((p)=>{console.log(p+p.languages.forEach(p=>{console.log(p)}))})