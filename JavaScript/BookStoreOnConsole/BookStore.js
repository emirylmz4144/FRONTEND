let shelfs = [
    [
        {isim: "sabahattin ali", kitapAdi: "Kürk Mantolu Madonna", show: false},
        {isim: "sabahattin ali", kitapAdi: "Kuyucaklı Yusuf", show: false}
    ],
    [
        {isim: "stephen zwaig", kitapAdi: "Gömülü Şamdan", show: false},
        {isim: "stephen zwaig", kitapAdi: "Dönüşüm", show: false}
    ],
    [
        {isim: "şemsettin sami", kitapAdi: "Taaşuk-ı Talat ve Fitnat", show: false},
        {isim: "şemsettin sami", kitapAdi: "Aşk ve Yalan", show: false}
    ]
];

let seems = function createShelf() {
    for (let i = 0; i < shelfs.length; i++) {
        var row = "";

        for (let j = 0; j < shelfs[i].length; j++) {
            row += "|" + (shelfs[i][j].show ? i.toString() + " " + j.toString() + "|" : "---|");
        }

        console.log(row);
        console.log("-------------");
        row = "";
    }
};

let isFind = function findLocationOfBook(bookName = "") {
    let found=false;
    shelfs.forEach((shelf) => {
        shelf.forEach((book) => {
            if (book.kitapAdi.toLowerCase().includes(bookName.toLowerCase())) {
                book.show = true;
                found=true;
            } else {
                
            }
        });
    });

    return found;
};

function run() {
    seems();
    let findForBook = window.prompt("Lütfen aramak istediğiniz kitabın adını giriniz");
    if (!isFind(findForBook)) {
        alert("ARADIĞINIZ KİTAP KÜTÜPHANEMİZDE YOKTUR");
    } else {
        console.clear();
        seems();
    }
}

run();
