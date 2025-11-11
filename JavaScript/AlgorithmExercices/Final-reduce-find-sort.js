let clean = letter => {
    return letter.replace(/[^a-zA-Z0-9 ]+/g, '');
}

let wordsArr = paragraph => {
    return paragraph.match(/[A-Za-z]+/gi)
}



let tenMostFrequentWords = (arr, amount = 4) => {
    return arr.reduce((acc, currentWord) => {
        if (!acc.find(b => b.kelime === currentWord)) {
            acc.push({ kelime: currentWord, tekrarSayisi: 1 })
        }
        else {
            acc.find(b => b.kelime === currentWord).tekrarSayisi++
        }
        return acc
    }, []).sort((a, b) => b.tekrarSayisi - a.tekrarSayisi).splice(0, amount)
}


let calculate = (input) => {
    let clear = clean(input)
    let clearArr = wordsArr(clear)
    return tenMostFrequentWords(clearArr)
}




let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(calculate(sentence))