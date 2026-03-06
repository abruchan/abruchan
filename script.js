const tabs = document.querySelectorAll(".tab")
const buttons = document.querySelectorAll(".nav-tabs button")

let currentTab = "home"

buttons.forEach(button => {

button.addEventListener("click", () => {

const target = button.dataset.tab

if(target === currentTab) return

tabs.forEach(tab => {

tab.classList.remove("active","left")

})

document.getElementById(currentTab).classList.add("left")

document.getElementById(target).classList.add("active")

currentTab = target

})

})


/* Load Gallery */

fetch("data/gallery.json")

.then(res => res.json())

.then(data => {

const grid = document.getElementById("gallery-grid")

data.forEach(item => {

const img = document.createElement("img")

img.src = "gallery/" + item.image
img.alt = item.title

grid.appendChild(img)

})

})


/* Load Blog */

fetch("data/blog.json")

.then(res => res.json())

.then(posts => {

const container = document.getElementById("blog-container")

posts.forEach(post => {

const article = document.createElement("div")

article.className = "blog-post"

article.innerHTML = `
<h3>${post.title}</h3>
<small>${post.date}</small>
<p>${post.text}</p>
`

container.appendChild(article)

})

})