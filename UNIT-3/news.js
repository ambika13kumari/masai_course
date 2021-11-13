async function news() {
    let title = localStorage.getItem("title")
    console.log(title);

    let res = await fetch(`https://newsapi.org/v2/everything?qInTitle=${title}&apiKey=98e462a46b7049d39612ce83d1b0bfc4`)
    let data = await res.json()
    show(data.articles[0]);
}

news()

var parent = document.getElementById("parent");

function show(news) {
    console.log(news);

        let div = document.createElement("div");
        let div_img = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = "Title - " + news.title 
        let content = document.createElement("p");
        content.innerText = news.content
        let description = document.createElement("p");
        description.innerText = news.description
        let publishedAt = document.createElement("p");
        publishedAt.innerText = "At. " + news.publishedAt
        
        let author = document.createElement("p");
        author.innerText = news.author
        let img = document.createElement("img");
        img.src = news.urlToImage

        div_img.append(img)
        div.append(title,content,description,publishedAt,author)
        parent.append(div_img,div) 
}