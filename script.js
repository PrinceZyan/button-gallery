var body = document.body;

function hideMePls(){
    var  hide = document.getElementById("hiding");
    console.log(hide.style.display)
    if (hide.style.display === "none") {
    hide.style.display="block"; 
    }
    else {
        hide.style.display="none";
    }
};

// make 2 more divs with imgs and make 2 more button
function IDK(){
 var second = document.getElementById("secondDiv");
 if (second.style.display === "none") {
     second.style.display="block";   
 }
 else {
     second.style.display="none";
 }   
};


function ok(){
    var thirdDiv = document.getElementById("thirdDiv");
    if (thirdDiv.style.display === "none") {
        thirdDiv.style.display="block";   
    }
    else {
        thirdDiv.style.display="none";
    }   
   };

   function lol(){
    var lastDiv = document.getElementById("lastDiv");
    if (lastDiv.style.display === "none") {
        lastDiv.style.display="block";   
    }
    else {
        lastDiv.style.display="none";
    }   
   };