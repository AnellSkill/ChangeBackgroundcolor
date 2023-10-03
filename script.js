let darkMode = function changeBackgroundColor(darkMode){
  let changeBodyBackground = document.body;
  let divone = document.getElementById('peaky');
  let button = document.getElementById('click'); 
  let divtwo = documen.getElementById('peak')
  
if (!darkMode) {
    changeBodyBackground.style.backgroundColor = "#230037";
    changeBodyBackground.style.color = "#FFFFFF";
    button.onclick = changeBackground
    divone.style.background = "#FFFB00";
    divtwo.style.background = "#2D0046"
    button.innerHTML = "Light Mode";
    button.style.backgroundColor = "#767676";
    button.style.color = "#000";
    button.style.borderColor = "#FFFB00"
    darkMode = true;
  } else{
    changeBodyBackground.style.backgroundColor = "FFFFFF";
    changeBodyBackground.style.color = "2D0046";
    divone.style.background = "#2D0046";
    divtwo.style.background = "#FFFFFF";
    button.innerHTML = "Dark Mode";
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
    darkMode = false;
  }
}
