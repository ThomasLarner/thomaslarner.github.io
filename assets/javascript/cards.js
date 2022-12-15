const econ = document.querySelector('.economics_column_cards')
fetch('/economics-column/cards.html')
.then(res=>res.text())
.then(data=>{
    econ.innerHTML=data
})

const old_articles = document.querySelector('.old_articles')
fetch('/articles/old-cards.html')
.then(res=>res.text())
.then(data=>{
    old_articles.innerHTML=data
})

const chart = document.querySelector('.uncharted_cards')
fetch('/uncharted/cards.html')
.then(res=>res.text())
.then(data=>{
    chart.innerHTML=data
})