function create_Array()
{
   var array=new Array();
    var count_array=Number(prompt("Dizinin eleman sayısını giriniz:"));
    for(let i=0;i<count_array;i++)
    {
       array[i]=Number(prompt("Lütfen dizinin "+(i+1)+".elemanını giriniz: "));
    }
    
    return array;
}

function print_array(array)
{
  if(Array.isArray(array))
  {
    for(let i=0;i<array.length;i++)
    {
        document.write("Dizinin "+i+".elemanı: "+array[i]+"<br>");
    }
  }
  else
  {
    document.write("Lütfen bir dizi giriniz");
  }
}


var array=create_Array().sort();
print_array(array);