var employees=[];
function addEmployee()
{
    var code=document.getElementById("empid").value;
    var name=document.getElementById("name").value;
    var basic=document.getElementById("basic").value;
    var employee={
           "code" : code,
           "name" : name,
           "basic" : basic
    }
    employees.push(employee);
    for(var i=0;i<employees.length;i++)
    {
        alert(employees[i].code);
        
    }
}