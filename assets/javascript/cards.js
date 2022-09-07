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

const all_articles = document.querySelector('.all_articles')
fetch('/articles/cards.html')
.then(res=>res.text())
.then(data=>{
    all_articles.innerHTML=data
})

const old_articles = document.querySelector('.old_articles')
fetch('/articles/old-cards.html')
.then(res=>res.text())
.then(data=>{
    old_articles.innerHTML=data
})