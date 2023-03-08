function menuFunction() {
    var close = document.getElementById("close");
    var moreText = document.getElementById("menu");
    var menu_open_btn = document.getElementById("menu_open_btn")
    var menu_close_btn = document.getElementById("menu_close_btn")

    if (close.style.display === "none") {
        close.style.display = "inline";
        moreText.style.display = "none";
        
        menu_close_btn.style.display = "none";
        menu_open_btn.style.display = "inline";

    } else {
        close.style.display = "none";
        moreText.style.display = "inline";

        menu_close_btn.style.display = "inline";
        menu_open_btn.style.display = "none";
    }
}

const header = document.querySelector('.header_main')
fetch('/assets/html/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})