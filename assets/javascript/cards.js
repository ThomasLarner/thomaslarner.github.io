const econ = document.querySelector('.economics_column_cards')
fetch('/economics-column/cards.html')
.then(res=>res.text())
.then(data=>{
    econ.innerHTML=data
})

const blog = document.querySelector('.blog_cards')
fetch('/blog/cards.html')
.then(res=>res.text())
.then(data=>{
    blog.innerHTML=data
})