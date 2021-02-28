$(function () {
  $("#form")
    .parsley()
    .on("form:submit", function () {
      return false;
    });
});
$(window).on("load", function () {
  addCard();
});

let cardBody;

const error = () => {
  $("#form").trigger("reset");
};
const clicked = () => {
  let name = document.querySelector("#name").value;

  let email = document.querySelector("#staticEmail").value;
  let website = document.querySelector("#website").value;
  let image = document.querySelector("#image").value;
  if (name !== "" && email !== "" && website !== "" && image !== "") getData();
};

let cards = [];

const getData = () => {
  let gender;
  let java, html, css;
  if (document.getElementsByName("gender")[0].checked == true) gender = "Male";
  else gender = "Female";
  if ($("#java").is(":checked")) java = "Java";
  else java = "";
  if ($("#html").is(":checked")) html = "HTML";
  else html = "";
  if ($("#css").is(":checked")) css = "CSS";
  else css = "";

  let card = {
    name: document.getElementById("name").value,
    email: document.getElementById("staticEmail").value,
    website: document.getElementById("website").value,
    image: document.getElementById("image").value,
    gender: gender,
    java: java,
    html: html,
    css: css,
  };
  cards.push(card);

  //saving to localStorage
  sessionStorage.setItem("studentList", JSON.stringify(cards));
  addCard();
};

const addCard = () => {
  document.getElementById("data").innerHTML = "";
  if (!cards.length && JSON.parse(sessionStorage.getItem("studentList"))) {
    cards.push(...JSON.parse(sessionStorage.getItem("studentList")));
  }
  let item = JSON.parse(sessionStorage.getItem("studentList"));
  // for testing purpose only
  console.log(item);
  // **********************

  item.forEach((el) => {
    cardBody = document.createElement("div");
    cardBody.innerHTML = `<div class="card w3-animate-opacity">
      <div class="card-body">
      <div class="row">
        <div class="col-6 c-body">
  
          <h5 class="card-title card-head" style="background-color: #A7C740;color:white;display:flex;justify-content:center"><b>Description</b></h5>
          <p class="card-text" style="text-transform: capitalize"><b>${el.name}</b></p>
          <p class="card-text" style="text-transform: capitalize"><b>${el.gender}</b></p>
          <p class="card-text" ><b>${el.email}</b></p>
          <a href="${el.website}" target="_blank"><p class="card-text" ><b>${el.website}</b></p></a>
          <br>
          <div style="display: flex;justify-content: space-between">
  
    <p class="card-text"><b>${el.java}</b></p>
    
    <p class="card-text"><b>${el.html}</b></p>
    
    <p class="card-text"><b>${el.css}</b></p>
          </div>
          
         
        </div>
        <div class="col-6" style="d-flex; align-items: center;justify-content-center">
      <img src="${el.image}" alt="image not found" style="width:100%;height:100%;border-radius: 10%">
      </div>
      </div>
      
      </div>
    </div>`;
    showData();
  });
};

const showData = () => {
  document.getElementById("data").appendChild(cardBody);
};
