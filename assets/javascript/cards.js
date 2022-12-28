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

const econ = document.querySelector('.economics_column_cards')
fetch('/economics-column/cards.html')
.then(res=>res.text())
.then(data=>{
    econ.innerHTML=data
})

const chart = document.querySelector('.uncharted_cards')
fetch('/uncharted/cards.html')
.then(res=>res.text())
.then(data=>{
    chart.innerHTML=data
})