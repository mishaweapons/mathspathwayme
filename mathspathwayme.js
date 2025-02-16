// *Copyright mishaweapons 2025
//
//
console.log("%cWelcome to Maths Pathway Me v1.1", "font-family: Times New Roman; color: lightgreen;  font-size: larger;");
if (window.confirm("Would you like to proceed with modifying the tab?"))
{ document.title = "Maths Pathway";
var link = document.querySelector("link[rel~='icon']");
if (!link) { link = document.createElement('link'); link.rel = 'icon';
document.head.appendChild(link); }
link.href = "https://mathspathway.com/wp-content/uploads/2022/06/math-pathway-favicon-150x150.png"; }
alert("Sent a request to change the icon. Please note some sites will not let you do this due to their security policy. However, the title will change no matter what, unless the website changes it back.")
//
//
//
