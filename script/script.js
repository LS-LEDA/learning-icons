
//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function goLedaSection() {
  var ledaSection = document.getElementById("LedaSection");
  var topPosLeda = ledaSection.offsetTop-250;
  window.scrollTo(0, topPosLeda);
} 

function goProjectSection() {
  var projectSection = document.getElementById("ProjectSection");
  var topPosProject = projectSection.offsetTop-250;
  window.scrollTo(0, topPosProject);
} 

function goIconsSection() {
  var iconsSection = document.getElementById("IconsSection");
  var topPosIcons = iconsSection.offsetTop-250;
  window.scrollTo(0, topPosIcons);
} 

function readJSON(){
    var request = new XMLHttpRequest();
    request.open("GET", "../../icons.json", false);
    request.send(null)
    var icons = JSON.parse(request.responseText);
    

    for (let i = 0; i < icons.info.length; i++){
        document.body.innerHTML += '<div id = "' + icons.info[i].category +  '">'
        var division = document.getElementById(icons.info[i].category);


        division.innerHTML += '<h2>' + icons.info[i].category + '</h2>';
        for(let y = 0; y < icons.info[i].icon.length; y++){
            division.innerHTML += '<div id = "' + icons.info[i].icon[y].name +  '" class = "subdivision">'
            var subdivision = document.getElementById(icons.info[i].icon[y].name);
            subdivision.innerHTML += '<h3 class = "name">' + icons.info[i].icon[y].name + '</h3>';
            subdivision.innerHTML += '<p class = "description">' + icons.info[i].icon[y].description + '</p>';
            subdivision.innerHTML +=  '<img class = "image" src="' + icons.info[i].icon[y].url + '" alt="Girl in a jacket" width="100" height="100">'; 
        }
    }
}


