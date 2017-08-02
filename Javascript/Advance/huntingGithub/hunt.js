$(document).ready(function(){
    $("#getName").click(function(){
        $.get("https://api.github.com/users/hirchaudhary", displayName)
        function displayName(data) {
          $("#name").html("Name: "+data.name);
        }
    })
})
