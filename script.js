let strongElements =document.querySelectorAll("strong");
function highlight() {
    //Write your code here
	for (let i = 0; i < strongElements.length; i++) {
    strongElements[i].style.color = "rgb(0, 128, 0)";
  }
}


function return_normal() {
    //Write your code here
for (let i = 0; i < strongElements.length; i++) {
    strongElements[i].style.color = "rgb(0, 0, 0)";
  }
}
