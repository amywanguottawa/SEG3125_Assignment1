const container = document.getElementById("container");
const search = document.getElementById("search");
const availBtn = document.getElementById("availBtn");
var hotelName;
function makeRows() {
  
  for (i = 0; i < hotels.length; i++) {
    let border = document.createElement("div");
    border.className = "border m-2 p-3 border-secondary border-2";
    let row = document.createElement("div");
    row.className = "row";
    let imgCol = document.createElement("div");
    imgCol.className = "col-4";
    let textCol = document.createElement("div");
    textCol.className = "col-6";
    let smContainer = document.createElement("div");
    smContainer.className = "container-sm";
    let buttonCol = document.createElement("div");
    buttonCol.className = "col-2";

    let img = document.createElement("img");
    img.src = hotels[i].image;
    img.className = "img-fluid";

    let name = document.createElement("h4");
    name.innerHTML = hotels[i].name;

    let description = document.createElement("p");
    description.innerHTML = hotels[i].description;

    let button = document.createElement("button");
    button.className = "btn btn-primary d-flex justify-content-center d-md-table mx-auto";
    button.innerHTML = "Check Availability";
    button.id = hotels[i].name;
    //on click of button send to hotel page
    button.onclick = function() {
      hotelName = button.id;
      window.location.href = "/hotelSelect.html";
    }
    imgCol.appendChild(img);
    textCol.appendChild(name);
    textCol.appendChild(description);
    smContainer.appendChild(textCol);
    buttonCol.appendChild(button);
    

    container.appendChild(border);
    border.appendChild(row);
    row.appendChild(imgCol);
    row.appendChild(textCol);
    textCol.appendChild(smContainer);
    row.appendChild(buttonCol);

  };
  return container;
};



$(function() {
  $('#datepicker').datepicker();
  
});
  function rangeSlide(value) {
      document.getElementById('rangeValue').innerHTML = "$" + value;
  }
  $('.input-daterange input').each(function() {
      
  $(this).datepicker('clearDates');
});
