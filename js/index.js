$(function () {
    $('#form').parsley().on('form:submit', function() {
      return false; 
      
    });

  });
  $( window ).on( "load", function() { addCard();

})
const error = () => {
   
        $("#form").trigger("reset");
     

}
const clicked = () => {
    let name = document.querySelector("#parsley-id-5").innerHTML;
    let email = document.querySelector("#parsley-id-7").innerHTML;
    let website = document.querySelector("#parsley-id-9").innerHTML;
    let link = document.querySelector("#parsley-id-11").innerHTML;
    if(name==="" && email==="" && website==="" && link==="")
    getData();
    
}

let cards = [];

const getData = () => {
//   let gender = "";
// let skills = "";
//   $.each($("input[type=radio][name=gender]:checked").val(), function(){
//       gender+=$(this).val();
//   });
//   $.each($("input[type=checkbox][name='skills']:checked").val(), function(){
//     skills+=$(this).val();
// });
// console.log(gender);
// console.log(skills);
    let card = {
    name: document.getElementById('name').value,
        email: document.getElementById('staticEmail').value,
        website: document.getElementById('website').value,
        image: document.getElementById('image').value,
// gender: gender,
// skills: skills,
    }
    cards.push(card);
   
    //saving to localStorage
  sessionStorage.setItem('studentList', JSON.stringify(cards) );
    addCard();
}
let cardBody;
const addCard = () => {
  document.getElementById("data").innerHTML=""
  if(!cards.length && JSON.parse(sessionStorage.getItem("studentList"))){
    cards.push(...JSON.parse(sessionStorage.getItem("studentList")))
  }
    let item = JSON.parse(sessionStorage.getItem("studentList"));
    // for testing purpose only
    console.log(item);
    // **********************

    item.forEach(el => {
      cardBody = document.createElement("div");
     
     
    cardBody.innerHTML = `<div class="card">
    <div style="display: flex;justify-content: space-between" class="card-body">
      <div>

        <h5 class="card-title">Description</h5>
        <p class="card-text">${el.name}</p>
        
        <p class="card-text">${el.email}</p>
        <p class="card-text">${el.website}</p>
        
       
      </div>
      
    </div>
  </div>`;
showData();
})}

const showData = () => {
   
    document.getElementById("data").appendChild(cardBody);  
}
   
document.querySelector('.messageCheckbox').checked;
    

