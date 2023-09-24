// const newDiv = document.createElement('div')
// console.log(newDiv);//<div><div>
// newDiv.innerText = 'Hello World'////<div>Hello World<div>

const body = document.querySelector('body')
// body.append(newDiv)
{/* <body> = document.querySelector("body") */}

// <head> = document.querySelector("head")
// document.head
// <html> = document.querySelector("html")
// document.documentElement

// document.body.append(newDiv)// add newDiv to the of the body
// document.body.prepend(newDiv)// add newDiv to the start the body



// let result = document.body.append(newDiv)
// console.log(result)
// result = document.body.appendChild(newDiv)// add only one element
// console.log(result)


//==========================task===================================
// Создать параграф, задать ему текст и добавить в HTML-документ в div с #root
// const newParagraph = document.createElement('p')// <p><p>
// newParagraph.innerText = "Hello Mariia"// <p>Hello Mariia<p>

// const  newDiv = document.querySelector('#root')
// newDiv.append(newParagraph)



// const creatNewParagraph = document.createElement('p')
// creatNewParagraph.innerText = 'hello me';
// const div = document.querySelector('#main')
// div.append(creatNewParagraph)
// let result = document.body.append(div)

// Создать множество параграфов с числами от 0 до 19 и добавить в див с id root.
{/* 
const newDiv = document.querySelector("#root")
for(let i = 0; i <= 19; i++) {
  const pElem = document.createElement("p") // <p></p>
  pElem.innerText = i // <p>{i}</p>
  newDiv.append(pElem)
} */}

//Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root
// const divRoot = document.querySelector("#root")
// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// for(let i = 0; i < words.length; i++) {
//     const pElem = document.createElement("p") // <p></p>
//     pElem.innerText = words[i] // <p>{i}</p>
//     divRoot.append(pElem)
//   }



  //Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую) и формирует в интерфейсе картинку и внизу ссылку, указанную пользователем.

// https://i.wpimg.pl/360x240/wpcdn.pl/extradom/designs/70658/559632/07dbd048ce1115e92075eb7dfe0a232e8f8eca794e871d721823f20e2dac7545.jpg
{/* <img src="{link}" alt="image">
    <a href="{link}">Link to post</a> */}

    // const imageSrc = prompt("Set image source")
    // const postLink = prompt("Set link to some post")
    
    // const imgElem = document.createElement("img") // <img>
    // imgElem.setAttribute("src", imageSrc) // <img src="{imageSrc}">
    // imgElem.setAttribute("alt", "Post image") // <img src="{imageSrc}" alt="Post image">
    
    // const aElem = document.createElement("a") // <a></a>
    // aElem.setAttribute("href", postLink) // <a href="{postLink}"></a>
    // aElem.innerText = "Link to post" // <a href="{link}">Link to post</a>
    
    // const innerContainer = document.querySelector(".container .inner_container")
    // innerContainer.append(imgElem, aElem)

    
    //Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div c #links.

    // const links = [
    //     {
    //         link: "https://google.com",
    //         title: "Google"
    //     },
    //     {
    //         link: "https://facebook.com",
    //         title: "Facebook"
    //     },
    //     {
    //         link: "https://github.com",
    //         title: "GitHub"
    //     },
    //     {
    //         link: "https://youtube.com",
    //         title: "YouTube"
    //     }
    // ]
// <a href="{link}">{title}</a>
// const divLinks = document.querySelector("#links")
// for(let i = 0; i < links.length; i++) {
//   const aElem = document.createElement("a") // <a></a>

//   const {link, title} = links[i]
//   aElem.innerText = title // <a>{title}</a>
//   aElem.setAttribute("href", link) // <a href="{link}">{title}</a>
//   divLinks.append(aElem)
// }


//Рассматриваем кейс, в котором создается div с картинкой и ссылкой внутри.

{/* <div>
  <img src="{link}" alt="image">
  <a href="{link}">Link to post</a>
</div> */}

// const imageSrc = "https://i.wpimg.pl/360x240/wpcdn.pl/extradom/designs/70658/559632/07dbd048ce1115e92075eb7dfe0a232e8f8eca794e871d721823f20e2dac7545.jpg"
// const postLink = "https://google.com"

// const imgElem = document.createElement("img") // <img>
// imgElem.setAttribute("src", imageSrc) // <img src="{imageSrc}">
// imgElem.setAttribute("alt", "Post image") // <img src="{imageSrc}" alt="Post image">

// const aElem = document.createElement("a") // <a></a>
// aElem.setAttribute("href", postLink) // <a href="{postLink}"></a>
// aElem.innerText = "Link to post" // <a href="{link}">Link to post</a>

// const divElem = document.createElement("div") // <div></div>
// divElem.append(imgElem, aElem)

// const containerDiv = document.querySelector(".container")
// containerDiv.append(divElem)// добавили дополнительно в html в существующий контейнер


// Создаем функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает карточку с картинкой и ссылкой внутри.
/*
<div>
  <img src="{link}" alt="image">
  <a href="{link}">Link to post</a>
</div>
// */
// function createPostCard(imageSrc, postLink) {  
//     const imgElem = document.createElement("img") // <img>
//     imgElem.setAttribute("src", imageSrc) // <img src="{imageSrc}">
//     imgElem.setAttribute("alt", "Post image") // <img src="{imageSrc}" alt="Post image">
    
//     const aElem = document.createElement("a") // <a></a>
//     aElem.setAttribute("href", postLink) // <a href="{postLink}"></a>
//     aElem.innerText = "Link to post" // <a href="{link}">Link to post</a>
    
//     const divElem = document.createElement("div") // <div></div>
//     divElem.append(imgElem, aElem)
//     return divElem
//   }
  
//   const postCard = createPostCard("https://i.wpimg.pl/360x240/wpcdn.pl/extradom/designs/70658/559632/07dbd048ce1115e92075eb7dfe0a232e8f8eca794e871d721823f20e2dac7545.jpg", "https://google.com")
//   console.log(postCard);
  
//   const containerDiv = document.querySelector(".container")
//   containerDiv.append(postCard)

//Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count). Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество. 

const products = [
  {
      id: 1,
      title: "bicycle",
      unit_price: 45000,
      discount: 10,
      count: 15
  },
  {
      id: 2,
      title: "roller-skates",
      unit_price: 15000,
      discount: 5,
      count: 4
  },
  {
      id: 3,
      title: "kick scooter",
      unit_price: 10000,
      discount: 30,
      count: 5
  },
  {
      id: 4,
      title: "skis",
      unit_price: 25000,
      discount: 10,
      count: 12
  },
  {
      id: 5,
      title: "skate",
      unit_price: 10000,
      discount: 0,
      count: 1
  }
]

const productsContainer = document.querySelector(".products-container")
let totalSum = 0;
let totalCount = 0;
for(let i = 0; i < products.length; i++) {
  const {title, count, unit_price} = products[i]

  const pTitle = document.createElement("p") // <p></p>
  const pCount = document.createElement("p") // <p></p>
  const pUnitPrice = document.createElement("p") // <p></p>

  pTitle.innerText = `Title: ${title}` // <p>Title: bicycle</p>
  pUnitPrice.innerText = `Price: ${unit_price}` // <p>Price: 45000$</p>
  pCount.innerText = `Count: ${count}` // <p>Count: 15</p>

  const productCard = document.createElement("div")
  productCard.append(pTitle, pUnitPrice, pCount)
  productsContainer.append(productCard)
  totalSum += unit_price * count
  totalCount += count
}
const pTotalSum = document.createElement('p');
const pTotalCount = document.createElement('p');
pTotalSum.innerText = `Total sum: ${totalSum}`;
pTotalCount.innerText = `Total count: ${totalCount}`;
document.body.append(pTotalSum, pTotalCount)

