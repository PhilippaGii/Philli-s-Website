var modal = document.getElementById('modal');
var thumbnail = document.getElementById('thumbnail');
var closebtn = document.getElementsByClassName('closebtn')[0];

console.log(modal);
console.log(thumbnail);
console.log(closebtn);

thumbnail.onclick = function() {
  console.log("Thumbnail clicked");
  modal.style.display = "block"
}

closebtn.onclick = function() {
  console.log("Close button clicked");
  modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}
