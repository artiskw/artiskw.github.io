//Menu
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header-section nav");
let line = document.querySelector(".line-top");


menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  line.classList.toggle("active");
};

//Form
function validateform() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let msg = document.getElementById('msg').value;
  let checkBox = document.getElementById("myCheck");
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let phoneno = /^\d{10}$/;

  if (name,email,phone,msg == '') {
    alert("aizpildiet visus laukus");
    
  } else if (!(email).match(pattern)) {
    alert("Ievadiet derigu epastu");
    
  } else if ((inputtxt.value.match(phoneno))){
    alert("ieacdit numuru");
   
  } else {
    alert("viss  labi");
  }
}

//Show details
function showText() {
  let x = document.getElementById("details");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

