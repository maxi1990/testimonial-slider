const testimonials = [
    {
        name: "Claudia C",
        photoUrl: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Sometimes I find myself creating long lists of characters (not completely original, but based off of a certain video game), in many things"
    },
    {
        name: "Alexandra B",
        photoUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I'm tracking down high school classmates so we can notify them about our 35th reunion using internet searches."
    },
    {
        name: "Maria T",
        photoUrl: "https://images.unsplash.com/photo-1598346762291-aee88549193f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I decided to use your random number generator. Whatever number it generates, that's the row I do next in the spreadsheet. It also actually makes the process more fun"
    }
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")
let idx = 0

updateTestimonial()
function updateTestimonial() {
    const {name,photoUrl,text} = testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if (idx === testimonials.length) {
        idx = 0
    }
    setTimeout(()=>{
     updateTestimonial()
    },2000)
}