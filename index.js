async function fet_data() {
    let res = await fetch("http://localhost:3000/Employ");
    let data = await res.json();
    let final_data = data
      .map(
        (t) => `
      <tr>
      <td> ${t.id}</td>
      <td>${t.name}</td>
      <td>${t.email}</td>
      <td>${t.number}</td>
      <td><button onclick="mydelete('${t.id}')">Delete</button></td>
      <td><button onclick="myedit('${t.id}')">edit</button></td>
      </tr>
      
      `
      )
      .join("");
    document.querySelector("#showdata").innerHTML = final_data;
    console.log("jjjkuahfcjkewc")
  }
  fet_data();
  function mydelete(id) {
    fetch(`http://localhost:3000/Employ/${id}`, {
      method: "DELETE",
    }).then((res) => alert("deleted successfully..!!!"));
  }
  // map--> it is used for fetch data
  
  function insertdata() {
    let data = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      number: document.querySelector("#number").value,
    };
    fetch("http://localhost:3000/Employ", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => alert("inserted successfully"));
  }
  //update data
  async function myedit(id) {
    let mydata = await fetch(`http://localhost:3000/Employ/${id}`);
    let redata = await mydata.json();
    let senddata = `
      <input type="text" value="${redata.id}" id="id1" readonly><br>
      <input type="text" value="${redata.name}" id="name1"><br>
      <input type="text" value="${redata.email}" id="email1"><br>
      <input type="text" value="${redata.number}" id="number1"><br>
      <input type="submit" onclick="finalupdate('${redata.id}')")>`;
  
    document.querySelector("#edittable").innerHTML = senddata;
  }
  function finalupdate(id) {
      let fdata={
          name:document.querySelector('#name1').value,    
          email:document.querySelector('#email1').value,   
          number:document.querySelector('#number1').value,    
      }
      fetch(`http://localhost:3000/Employ/${id}`,{
         method:'PUT',
         headers:{
         'Content-Type': 'application/json'
         },
         body:JSON.stringify(fdata)
         })
         .then(r=>alert("updata...!!"))
  }
  