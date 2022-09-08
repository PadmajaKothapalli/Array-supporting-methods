// using ".map()" array supporting method
let marks=[75,79,80,83,90]
let new_marks=marks.map((i)=>{
    return i+2;
})
console.log(marks);//[75,79,80,83,90]
console.log(new_marks);//[77,81,82,85,92]

//using ".foreach()" array supporting method 
//iterates the array and executes the function but return "undefined"
let count=[10,20,30,40,50]
let new_count=count.forEach((i)=>{
    return i+3;
})
console.log(count);//[10,20,30,40,50]
console.log(new_count);//undefined