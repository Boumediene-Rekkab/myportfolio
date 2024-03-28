var icon = document.getElementById("moon");
icon.onclick = function(){
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        document.getElementById("logo").src="img/white orng.png";
        icon.src="img/sun.png";
    }else{
        document.getElementById("logo").src="img/black orng.png";
        icon.src="img/moon.png";
    }
}