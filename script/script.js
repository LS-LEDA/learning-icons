function readJSON(){
    var category = document.getElementById("category");
    var name = document.getElementById("icon_name");

    var request = new XMLHttpRequest();
    request.open("GET", "../../icons.json", false);
    request.send(null)
    var icons = JSON.parse(request.responseText);
    

    for (let i = 0; i < icons.info.length; i++){
        
        document.body.innerHTML += '<div id = "' + icons.info[i].category +  '">'
        
        document.getElementById(icons.info[i].category).innerHTML += '<h1>' + icons.info[i].category + '</h1>';
        
        for(let y = 0; y < icons.info[i].icon.length; y++){
            document.getElementById(icons.info[i].category).innerHTML += '<h2>' + icons.info[i].icon[y].name + '</h2>';
            document.getElementById(icons.info[i].category).innerHTML += '<p>' + icons.info[i].icon[y].description + '</p>';
            document.getElementById(icons.info[i].category).innerHTML +=  '<img src="' + icons.info[i].icon[y].url + '" alt="Girl in a jacket" width="100" height="100">'; 
        }
        
    }

    
}



//name.innerHTML += icons.info[i].icon[y].name + "<br>";

