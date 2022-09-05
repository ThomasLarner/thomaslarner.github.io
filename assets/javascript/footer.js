const footer = document.querySelector('.footer_main')
fetch('/assets/html/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})