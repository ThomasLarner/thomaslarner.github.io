function menuFunction() {
    var close = document.getElementById("close");
    var moreText = document.getElementById("menu");
    var btnText = document.getElementById("menuBtn");

    if (close.style.display === "none") {
        close.style.display = "inline";
        moreText.style.display = "none";
    } else {
        close.style.display = "none";
        moreText.style.display = "inline";
    }
}

const header = document.querySelector('.header_main')
fetch('/assets/html/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})