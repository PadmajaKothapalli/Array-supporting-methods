let employees = [{ id: 10, name: "Ramya", sal: 40000 },
{ id: 11, name: "Sony", sal: 55000 },
{ id: 12, name: "Pratima", sal: 65000 },
{id: 13,name: "Kamini", sal: 40000}];

let new_employee = employees.filter((employee) => {
    if(employee.sal==40000){
    return employee.name;
    }
})
console.log(employees)

//console.log(eNames)
console.log(new_employee);