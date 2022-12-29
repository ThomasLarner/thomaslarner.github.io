const article_database = document.querySelector('.article_database')
fetch('/database/article_database.html')
.then(res=>res.text())
.then(data=>{
    article_database.innerHTML=data
})
const article_database2 = document.querySelector('.article_database2')
fetch('/database/article_database.html')
.then(res=>res.text())
.then(data=>{
    article_database2.innerHTML=data
})