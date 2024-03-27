// 2.
// function bolunenReqem(arr) {
//     var hesablama = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 === 0) {
//             hesablama++; 
//         }
//     }
//     console.log("5-ə bölünən ədədlərin sayısı: ", hesablama);
// }

// var testReqemler = [10, 15, 23, 25, 30, 35];

// bolunenReqem(testReqemler);

// 3.
// function sadeMurekkeb(eded) {
//     if (eded <= 1) {
//         return "Sadə deyil!";
//     }
//     for (var i = 2; i <= eded / 2; i++) {
//         if (eded % i === 0) {
//             return "Mürəkkəb deyil!";
//         }
//     }
//     return "Sadədir!";
// }

// var eded = 18;
// console.log(eded + " ədədi " + sadeMurekkeb(eded));



// 4.
// function yediyeBolunenSonuncu(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 7 === 0) {
//             console.log("7-ə tam bölünən sonuncu ədəd: ", arr[i]);
//             return; 
//         }
//     }
//     console.log("7-ə tam bölünən element tapılmadı!");
// }

// var testReqemler = [2, 14, 6, 21, 8, 35];
// yediyeBolunenSonuncu(testReqemler);

// 5.
// function enBoyukVeEnKicikElement(arr) {
//     var enKicik = arr[0];
//     var enBoyuk = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < enKicik) {
//             enKicik = arr[i];
//         }
//         if (arr[i] > enBoyuk) {
//             enBoyuk = arr[i];
//         }
//     }

//     console.log("Ən kiçik element:", enKicik);
//     console.log("Ən böyük element:", enBoyuk);
// }

// var testReqemler = [ 12, 45, 6, 78, 23, 56];
// enBoyukVeEnKicikElement(testReqemler);

// 6.
// function yeriniDeyisenFunc(arr) {
//     var enKicikIndex = 0;
//     var enBoyukIndex = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[enKicikIndex]) {
//             enKicikIndex = i;
//         }
//         if (arr[i] > arr[enBoyukIndex]) {
//             enBoyukIndex = i;
//         }
//     }

//     var temp = arr[enKicikIndex];
//     arr[enKicikIndex] = arr[enBoyukIndex];
//     arr[enBoyukIndex] = temp;

//     console.log("Ən böyük elementin indeksi: ", enBoyukIndex);
//     console.log("Ən kiçik elementin indeksi: ", enKicikIndex);
//     console.log("Yerləri dəyişdirilmiş array: ", arr);
// }

// var testReqemler = [12, 45, 9, 78, 23, 56];
// yeriniDeyisenFunc(testReqemler);

// 9.
// for (var i = 1; i <= 100; i++) {
//     var teklik = i % 10;
//     if (teklik === 1 && i !== 1) {
//         console.log(i);
//     }
// }


// 10.
// function polindromMu(ifade) 
// {
//     for (var i = 0; i < ifade.length / 2; i++) 
//     {
//         if (ifade[i] !== ifade[ifade.length - 1 - i]) 
//         {
//             return false; 
//         }
//     }
//     return true; 
// }
// var testIfadesi = "madam";
// if (polindromMu(testIfadesi)) {
//     console.log(testIfadesi + " polindromdur!");
// } else {
//     console.log(testIfadesi + " polindrom deyil!");
// }


// 13.
// function saitleriSil(metin) 
// {
//     var saitlerRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
//     return metin.replace(saitlerRegex, '');
// }

// var metin = "Bu bir test mətnidir və biz saitləri siləcəyik";
// console.log(saitleriSil(metin));



// 15.
// function edediOrtaTap(arr) 
// {
//     var uzunluq = arr.length;

//     var cəm = arr.reduce(function(toplam, meyar)
//     {
//         return toplam + meyar;
//     }, 0);

//     var edediOrta = cəm / uzunluq;
    
//     return edediOrta;
// }

// var ededler = [10, 20, 30, 40, 50];
// console.log("Ədədi orta: ", edediOrtaTap(ededler));



// 18.
function reqemlerinCemi(eded) 
{
    var cem = 0;
    while (eded > 0) 
    {
        cem += eded % 10;
        eded = Math.floor(eded / 10);
    }
    return cem;
}

var eded = 123;
console.log("Ədədin rəqəmlərinin cəmi: ", reqemlerinCemi(eded));


