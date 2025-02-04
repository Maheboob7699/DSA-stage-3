// // 1] Sorting //
// let arr=[20,18,3,2,30];
// let swap=0;

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//        if(arr[j]>arr[j+1]){
//           swap = arr[j];
//           arr[j]= arr[j+1];
//           arr[j+1] =swap;

//        }
//     }
// }
// console.log(arr);

// //2] buble search //
// let arr1 = [2, 3, 18, 20, 30];
// let find = 20;
// let start = 0;
// let end = arr1.length - 1;
// let complete = -1; // Use -1 to indicate "not found"

// for (i=start; start <arr1.length; i++) { // Empty initialization since start is already defined
//     let mid = Math.floor((start + end) / 2); 
//     console.log("Mid index:", mid, "Mid value:", arr1[mid]); 

//     if (arr1[mid] === find) {
//         complete = arr1[mid];
//         break; 
//     } else if (arr1[mid] < find) {
//         start = mid + 1; 
//     } else {
//         end = mid - 1; 
//     }
// }

// if (complete !== -1) {
//     console.log("Found:", complete);
// } else {
//     console.log("Not found");
// }


// 1] linear search //
let arr = [2, 5, 7, 1, 6];
function linearSearch(arr) {
    let target = 1;
    let found;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            found = arr[i]
            console.log(arr[i], "index is", i);
        }
    }
}

linearSearch(arr)


// 2] binary search //
// step 1:- First arrange in ascending to descending order.
// step 2:- check karo loop lagar har element par  kya array ka element match kar raha hai target sa agar hoga to us elemt ko varaible ma store kara do or lopp break kardo.
// step 3:-  check karo ki array ka elemet target sa chota to nahi agar chota hai hai  to us particular ement ka index sa ek index aga sa chalaga.
// step 4:- check agar ki array ka element bada to nahi agar bada hai to us array ka particular index sa ek index phicha sa chalaga 
let arr1 = [2, 5, 7, 1, 6];
function binarySearch(arr1) {
    let swap;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] > arr1[j + 1]) {
                swap = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = swap;
            }
        }
    }
    console.log(arr1);

    let target = 6;
    let start = 0;
    let found;
    let midPoint = Math.floor(arr1.length / 2);
    console.log(midPoint);

    // [1,2,5,6,7]//
    for (let i = start; i < arr1.length; i++) {
        if (arr1[i] === target) {
            found = arr1[i];
            console.log(arr1[i], "index is", i);
            break;
        }
        else if (arr1[midPoint] < target) {
            start = midPoint + 1;
        }
        else {
            start = midPoint - 1;
        }
    }
    console.log(found);
}
binarySearch(arr1)




// // 3] bubble short sort //
// // step 1:- arrange acending to descending order.
let arr2 = [2, 5, 7, 1, 6];
function bubbleShort(arr2) {
    let swap;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] > arr2[j + 1]) {
                swap = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = swap
            }
        }
    }
    console.log(arr2);
}
bubbleShort(arr2)


// // 4] selection  sort //
// // step1 :- loop ka andar loop chalaga 
// //step 2:- ek variable laga ga jo first loop ka index ko access karaga.
// // step 3:- jo index chota hoga us variable ma uska index store hojayga.
// // step 4:- fir ek or variable banyga to swap karna ma amdad karaga.
let arr3 = [2, 5, 7, 1, 6];
function selectionSort(arr3) {
    let minIndex=0;
    for (let i = 0; i < arr3.length; i++) {
        for (let j = i + 1; j < arr3.length; j++) {
            if (arr3[minIndex] > arr3[j]) {
                minIndex = j;
            }
        }
        let swap = arr3[minIndex];
        arr3[minIndex] = arr3[i];
        arr3[i] = swap;
    }
    console.log(arr3);
}
selectionSort(arr3);

// //5] insertion sort //
// step 1:- isma huma right to left cehck  karna hai
// step 2:- to ek  varaibale langa jism ahuma outer llop ka har element ata tahaga
// step 3:- or jo inner loop wo ya check karaga ki usma elemet kya outer loop ka elemrnt sa badaa hai agr inner loop ka elemnt outer loop ka elemnt sa bada hoga to  huma positiion chnage karna padaga;
// step 4:- to swap huma right side karna hoga or swao hona ka bad inner loop matlab j kim value decrement hogi har bar.
let arr4 = [2, 5, 7, 1, 6];
let swap;
for (let i = 1; i < arr4.length; i++) {
    swap = arr4[i]

    for (let j = i - 1; j >= 0; j--) {
        if (arr4[j] > swap) {
            arr4[j + 1] = arr4[j]; 
            arr4[j] = swap;
        } else {
            break;
        }
    }
}
console.log(arr4);
















