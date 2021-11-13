let news = document.getElementById("News");

async function searchNews(){
    let res = await fetch ('https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=98e462a46b7049d39612ce83d1b0bfc4')
    let data = await res.json();
    console.log("data:", data);

    appendNews(data.items);
}

function appendNews(news_data){
    news.innerHTML = null;
    new_data.forEach(({id: {newsId}}) => {
        let div = document.createElement("div");

        div.innerHTML = `<iframe width="360" height="21"`;

        div.style.marginTop = "20px";
        news.append(div);
    });
        
}