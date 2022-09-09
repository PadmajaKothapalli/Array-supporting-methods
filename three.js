let user={name:"Pritham",jobrole:"Surgeon",sal:75000}
let details={email:"drpritham@gmail.com",name:"Pritham"}
let marks=[85,65,90]
let user_details={...user,...details,jobrole:"Surgeon",marks}
console.log(user_details);  //name: 'Pritham',
                            //jobrole: 'Surgeon',
                            //sal: 75000,
                            //email: 'drpritham@gmail.com'
                            //marks: 85,65,90