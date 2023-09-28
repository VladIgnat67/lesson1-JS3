// RegEXP

// match - 
// test - проверяет есть ли совпадение (если есть то true/ если нет то false)
// split - разбивает строку в массив по разделителю

// i - ищет независимо от регистра 
// g - ищет все совпадение (иначе только первое)
// m - многострочный режим

// совпадение первых 4-х цифрa у банк. карте
// const str = '4556 1245 6789 3589';
// const string = '4565';

// if (str.includes(1245)) {
//     console.log(str);
//     const result = str.replace(/4556/g, string);
//     console.log(result);
// } else {
//     console.log('no');
// }


// 
// const DATE = 'DD.MM.YYYY';

// const test = str => {
//     let [dd, mm, yyyy] = str.split(/[\.\-\/]/);
//     dd = +dd;
//     yyyy = +yyyy;
//     let mm0 = mm - 1,
//     date = new Date(yyyy, mm0, dd, 15, 0, 0, 0);
//     return mm0 === date.getMonth() && dd == date.getDate() && yyyy === date.getFullYear();
// };
// const dates = [
//     "13-03-2020",
//     "13-03-2020",
//     "14-03-2006",
//     "14-07-2010"
// ];
// dates.forEach(date => console.log(date, ':', test(date)));

//
// const str = 'Привет всем'

// const patt = new RegExp("е");
// const res = patt.test(str);

// console.log('RES', res);