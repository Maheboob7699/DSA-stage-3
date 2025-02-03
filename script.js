// 1] Sorting //
let arr=[20,18,3,2,30];
let swap=0;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
       if(arr[j]>arr[j+1]){
          swap = arr[j];
          arr[j]= arr[j+1];
          arr[j+1] =swap;

       }
    }
}
console.log(arr);

//2] buble search //
let arr1 = [2, 3, 18, 20, 30];
let find = 20;
let start = 0;
let end = arr1.length - 1;
let complete = -1; // Use -1 to indicate "not found"

for (i=start; start <arr1.length; i++) { // Empty initialization since start is already defined
    let mid = Math.floor((start + end) / 2); 
    console.log("Mid index:", mid, "Mid value:", arr1[mid]); 

    if (arr1[mid] === find) {
        complete = arr1[mid];
        break; 
    } else if (arr1[mid] < find) {
        start = mid + 1; 
    } else {
        end = mid - 1; 
    }
}

if (complete !== -1) {
    console.log("Found:", complete);
} else {
    console.log("Not found");
}







