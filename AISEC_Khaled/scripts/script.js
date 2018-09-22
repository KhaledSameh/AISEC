content = document.querySelectorAll(".contentContainer")
mainListItems = document.querySelectorAll(".mainList li")
var correspondingIndex;


//Function to handle the clicks on the main list (To show the Home, Your Apps, Opportunities, and EP Analytics contents)
var mainHandler = function() {
  for (var i=0;i<mainListItems.length;i++)
  {
    if (this===mainListItems[i])
    {
      content[i].classList.remove("hide")
      correspondingIndex=i;
      break;
    }
    else if ((content[i].classList.contains("hide"))===false)
    {
    content[i].classList.toggle("hide");
    }
  }
  for (var i=correspondingIndex+1;i<mainListItems.length;i++)
  {
    content[i].classList.add("hide")
  }
  correspondingIndex=0;
};


//Numbers only checking function
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

mainListItems.forEach(function(element) {
  element.addEventListener("click", mainHandler);
});
