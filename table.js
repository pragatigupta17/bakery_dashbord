async function fet_data() {
    let res=await fetch("http://localhost:3000/Students")
    let data =await res.json()
    let final_data=data.map((t)=>`
    <tr>
<td>${t.id}</td>
<td>${t.name}</td>
<td>${t.email}</td>
<td>${t.number}</td>
<td><button onclick="mydelete('${t.id}')">Delete</button></td>
<td><button onclick="myedit('${t.id}')">Edit</button></td>

</tr>
    
    `).join("")
    document.querySelector('#showdata').innerHTML=final_data
    
}
fet_data()
function mydelete(id){
    fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
})
.then(res=>alert("deleted successfully..!!!"))
}async function myedit(id){
    let myupdata = await fetch(`http://localhost:3000/Students/${id}`)
    let redata = await myupdata.json()
    let senddata = `
    <input type="text" value="${redata.id}" id="id1" readonly><br>
    <input type="text" value="${redata.name}" id="name1"><br>
    <input type="text" value="${redata.age}" id="age1"><br>
    <input type="text" value="${redata.address}" id="address1"><br>
    <input type="submit" onclick="finalupdate('${redata.id}')">
    `
    document.querySelector('#edittable').innerHTML = senddata
}

function finalupdate(id){
    let fdata={
        name:document.querySelector('#name1').value,
         age:document.querySelector('#age1').value,
         address:document.querySelector('#address1').value,
    }
    fetch(`http://localhost:3000/Students/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("updated......!!!!"))
};
