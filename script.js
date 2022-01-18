let submit = document.getElementById("submit").addEventListener("click", form)
function form(event) {
    event.preventDefault();

    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let address1 = document.querySelector("#address1").value;
    let address2 = document.querySelector("#address2").value;
    let pin = document.querySelector("#pin").value;

    let gender = ""
    let g1 = document.getElementById("g1");
    let g2 = document.getElementById("g2");
    let g3 = document.getElementById("g3");
    if (g1.checked == true) {
        gender = g1.value
    }
    else if (g2.checked == true) {
        gender = g2.value
    }
    else if (g3.checked == true) {
        gender = g3.value
    }
    else {
        gender = " ";
    }

    let food = document.getElementsByName("food");
    let foodList = [];
    for (i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodList.push(food[i].value)
        }
    }
    if (foodList.length >= 2) {
        food = foodList.join(", ")
        console.log(food);
    }
    else {
        result = alert("select any 2 food")
        food = "";
    }


    let state = document.querySelector("#state").value;
    let country = document.querySelector("#country").value;
    let tbody = document.querySelector("#tbody");

    if (fname == "" || lname == "" || address1 == "" || address2 == "" || gender == " " || pin == "" || food == "" || state == "" || country == "") {
        alert("Enter all the fields")
    }
    else {
        tbody.innerHTML += `
    <tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${address1} ${address2}</td>
    <td>${pin}</td>
    <td>${gender}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>
    `
    }
}
