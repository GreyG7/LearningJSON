$(document).ready(function(){
  $.getJSON("myjson.json", function(data){
      console.log(data.name); // Prints: Harry
      console.log(data.age); // Prints: 14
  }).fail(function(){
      console.log("An error has occurred.");
  });
});


//document.write("Hi");