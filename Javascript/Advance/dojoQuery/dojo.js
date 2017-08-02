$(document).ready(function(){
    (function(){
        return function $Dojo(id){
            let button = document.getElementById(id);
            button.addEventListener("click", whatToDoOnClick);
        }
    }());
})
function whatToDoOnClick() {
  alert("You Did it!");
}
$Dojo("coding");
