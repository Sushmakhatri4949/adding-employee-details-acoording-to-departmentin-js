
let depart = [];
let employee = [];
let documentMode = "add";
let employeeMode = "add";
let ElementIndex = null;
let employeeindex = null;
// department push function
function sub(){
    if(documentMode=='add')
    {
        adddepart();
    }
    else if(documentMode=='edit')
    {

    let dcode=document.getElementById("dcode").value;
    let dname=document.getElementById("dname").value;
   
    
    const ddata = {
        Dname : dname,
        Dcode : dcode
    }

                depart[ElementIndex]=ddata;
                dropdown();
                 display(depart);
                 documentMode="add";
                 document.getElementById('button').value='add';


}  
}
//function dropdowm
function dropdown(){
let listitem = document.getElementById("listitem");
let options="";
depart.forEach(function(item){
    options += `<option value= "${item.Dcode}">${item.Dname}</option>`;
    

});
                listitem.innerHTML=options;
}
//displaying data

function  display(depart){

let html='';
depart.forEach(function(ddata,index){


html+=`
<tr>
<td>
    `+
    getinner(employee,ddata.Dcode)
    +`
    </td>
<td>${ddata.Dname}</td>
<td>${ddata.Dcode}</td>

<td>
<button type="button" onclick="removeItem(${index})">Delete</button>
<button type="button" onclick="edit(${index})">edit</button>
</td>

</tr>`;
});
    function  display(depart){

let html='';
depart.forEach(function(ddata,index){


html+=`
<tr>
<td>
    `+
    getinner(employee,ddata.Dcode)
    +`
    </td>
<td>${ddata.Dname}</td>
<td>${ddata.Dcode}</td>

<td>
<button type="button" onclick="removeItem(${index})">Delete</button>
<button type="button" onclick="edit(${index})">edit</button>
</td>

</tr>`;
});
    
    document.getElementById('table').innerHTML=html;
}
    document.getElementById('table').innerHTML=html;
}
//employee push function


function usub(){
    if(employeeMode=='add')
            {
                Addemp();
            }
            else if(employeeMode=='edit')
             {
                let dept=document.getElementById('dpart').value;
                    let name=document.getElementById('uname').value;
                    let address=document.getElementById('uaddress').value;
                    let selecte1=document.getElementById('listitem').value;

                    let edata={
                        Dept:dept,
                        Uname:name,
                        address:address,
                        Dcode : selecte1
                 }
                 employee[employeeindex]=edata;
                 display(depart);
                 employeeMode="add";
                 document.getElementById('addbutton').value='add';
             }
   
   
}
//adding data to depart
function adddepart(){
    let dcode=document.getElementById("dcode").value;
    let dname=document.getElementById("dname").value;
   
    
    const ddata = {
        Dname : dname,
        Dcode : dcode
    }
    depart.push(ddata);
    dropdown();
    

display(depart);

}
//adding employee row
function Addemp(){
            let dept=document.getElementById('dpart').value;
                    let name=document.getElementById('uname').value;
                    let address=document.getElementById('uaddress').value;
                    let selecte1=document.getElementById('listitem').value;
                   
                    let edata={
                        Dept:dept,
                        Uname:name,
                        address:address,
                        Dcode : selecte1
                        }
       


    employee.push(edata);
    display(depart);
   
}
// passing data in employee table
function getinner(employee,Dcode){
let td='<table>';

  
    employee.forEach(function(item,index){
        if(item.Dcode==Dcode){
            td += `<tr>
                
                <td>${item.Uname}</td>
                <td>${item.address}</td>
                <td>
            <button type="button" onclick="remove(${index})">Delete</button>
            <button type="button" onclick="editemp(${index})">edit</button></td>
            </tr>`;

                
               
        }

    });
    td +='</table>';
    return td;
}
//deleting row from department
function removeItem(id){
    if(confirm("Are you sure to delete all the data of this department"));
    {
       let c =depart[id] .Dcode;
     
       for(let i=0; i<=employee.length; i++)
       {
    employee.forEach(function(item,index){

    if(c==item.Dcode){
        employee.splice(index,1);
    }
        

    })
       }
       
    }
    depart.splice(id,1);
  display(depart);
}
//deleting row from employee
function remove(id){
    employee.splice(id,1);
    display(depart);
}
//editing depart row
function editemp(id){
    debugger;
    let currentData=employee[id];
            employeeMode='edit';
            document.getElementById('dpart').value=currentData.Dept;
            document.getElementById('addbutton').value='Update';
            document.getElementById('uname').value=currentData.Uname;
            document.getElementById('uaddress').value=currentData.address;
           employeeindex=id;

}

//editing depart row

    function edit(id){
   
        let currentData=depart[id];
                documentMode='edit';
                
                document.getElementById('button').value='Update';
                document.getElementById('dname').value=currentData.Dname;
                document.getElementById('dcode').value=currentData.Dcode;
               ElementIndex=id;
    
    }




