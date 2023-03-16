const article_database = document.querySelector('.article_database')
fetch('/articles_db.html')
.then(res=>res.text())
.then(data=>{
    article_database.innerHTML=data
})
const article_database2 = document.querySelector('.article_database2')
fetch('/articles_db.html')
.then(res=>res.text())
.then(data=>{
    article_database2.innerHTML=data
})