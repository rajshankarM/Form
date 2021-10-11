const formEl = document.querySelector("form-1");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddFormDetails(e) {
  e.preventDefault();
  const FirstName = document.getElementById("FN").value;
  const LastName = document.getElementById("LN").value;
  const Address = document.getElementById("AD").value;
  const Pincode = document.getElementById("PC").value;
  const Male = document.getElementById("Male").value;
  const Female = document.getElementById("Female").value;
  const Briyani = document.getElementById("Briyani").value;
  const Idly = document.getElementById("Idly").value;
  const Dosa = document.getElementById("Dosa").value;
  const ChickenRise = document.getElementById("Chicken Rise").value;
  const State = document.getElementById("State").value;
  const Country = document.getElementById("Country").value;


  tbodyEl.innerHTML += `
      <tr>
          <td>${FirstName}</td>
          <td>${LastName}</td>
          <td>${Address}</td>
          <td>${Pincode}</td>
          <td>${Male}</td>
          <td>${Female}</td>
          <td>${Briyani}</td>
          <td>${Idly}</td>
          <td>${Dosa}</td>
          <td>${ChickenRise}</td>
          <td>${State}</td>
          <td>${Country}</td>


      </tr>
  `;
}

formEl.addEventListener("submit", onAddFormDetails);