function factorial(num) {
    if (num == 0 || num == 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

const nilai = factorial(5);
console.log(nilai);


function reverse(str) {
    let newword = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newword += str[i];
    }
    return newword;
}
const balik = reverse("halo")
console.log(balik);

function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
const printArray = reverseArray(["apple", "melon", "manggo", "ayam"]);
console.log(printArray);


function score(nilai) {
    if (nilai <= 60)
        return "E";
    else if (nilai <= 70)
        return "D";
    else if (nilai <= 80)
        return "C";
    else if (nilai <= 90)
        return "B";
    else if (nilai <= 100)
        return "A";
    else {
        return "Score dari 0-100"
    }


}


for (let i = 0; i <= 100; i++) { 
    const final = 80
    //const hasil = score (final)
    const hasil = score (i)
    //console.log(`nilai mu adalah ${final} scorenya adalah ${hasil}`);
    console.log(`nilai mu adalah ${i} scorenya adalah ${hasil}`);
    

}




// let score = window.prompt ("input score mu")
// let inputScore = Number (score)
// switch (true){
//     case (score<=60 && score>0):
//         window.alert("Your Grade is D")
//         break;
//     case (score<=70 && score>61):
//         window.alert("Your Grade is C")
//         break;
//     case (score<=80 && score>71):
//         window.alert("Your Grade is B")
//         break;
//     case (score<=100 && score>81):
//         window.alert("Your Grade is A")
//         break;
//     default:
//         window.alert("Undefined");
//         break;

// }

let multiplier = 9;
index = 4;
for (let i = 0; i <= index; i++) {
    let result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}