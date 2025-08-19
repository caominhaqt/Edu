const courses = document.querySelector('.courses')
courses.addEventListener("click", () => {
    courses.style.backgroundColor = '#F5F5F5'
    courses.style.color = 'orange'
    blog.style.backgroundColor = 'white'
    blog.style.color = 'black'
    page.style.backgroundColor = 'white'
    page.style.color = 'black'
    add.style.backgroundColor = 'white'
    add.style.color = 'black'
    theme.style.backgroundColor = 'white'
    theme.style.color = 'black'
    home.style.backgroundColor = 'white'
    home.style.color = 'black'
})
const blog = document.querySelector('.blog')
blog.addEventListener("click", () => {
    blog.style.backgroundColor = '#F5F5F5'
    blog.style.color = 'orange'
    courses.style.backgroundColor = 'white'
    courses.style.color = 'black'
    page.style.backgroundColor = 'white'
    page.style.color = 'black'
    add.style.backgroundColor = 'white'
    add.style.color = 'black'
    theme.style.backgroundColor = 'white'
    theme.style.color = 'black'
    home.style.backgroundColor = 'white'
    home.style.color = 'black'
})
const page = document.querySelector('.page')
page.addEventListener("click", () => {
    page.style.backgroundColor = '#F5F5F5'
    page.style.color = 'orange'
    blog.style.backgroundColor = 'white'
    blog.style.color = 'black'
    courses.style.backgroundColor = 'white'
    courses.style.color = 'black'
    add.style.backgroundColor = 'white'
    add.style.color = 'black'
    theme.style.backgroundColor = 'white'
    theme.style.color = 'black'
    home.style.backgroundColor = 'white'
    home.style.color = 'black'
})
const add = document.querySelector('.add')
add.addEventListener("click", () => {
    add.style.backgroundColor = '#F5F5F5)'
    add.style.color = 'orange'
    blog.style.backgroundColor = 'white'
    blog.style.color = 'black'
    courses.style.backgroundColor = 'white'
    courses.style.color = 'black'
    page.style.backgroundColor = 'white'
    page.style.color = 'black'
    theme.style.backgroundColor = 'white'
    theme.style.color = 'black'
    home.style.backgroundColor = 'white'
    home.style.color = 'black'
})
const theme = document.querySelector('.theme')
theme.addEventListener("click", () => {
    theme.style.backgroundColor = '#F5F5F5'
    theme.style.color = 'orange'
    blog.style.backgroundColor = 'white'
    blog.style.color = 'black'
    courses.style.backgroundColor = 'white'
    courses.style.color = 'black'
    add.style.backgroundColor = 'white'
    add.style.color = 'black'
    page.style.backgroundColor = 'white'
    page.style.color = 'black'
    home.style.backgroundColor = 'white'
    home.style.color = 'black'
})
const home = document.querySelector('.home')
home.addEventListener("click", () => {
    home.style.backgroundColor = '#F5F5F5'
    home.style.color = 'orange'
    theme.style.backgroundColor = 'white'
    theme.style.color = 'black'
    blog.style.backgroundColor = 'white'
    blog.style.color = 'black'
    courses.style.backgroundColor = 'white'
    courses.style.color = 'black'
    add.style.backgroundColor = 'white'
    add.style.color = 'black'
    page.style.backgroundColor = 'white'
    page.style.color = 'black'
})
const content = document.querySelector('.content')
const content_course_over = document.querySelector('.content_course_over')
courses.addEventListener("click", () => {
    content_course_over.style.display = 'block'
    content.style.display = 'none'
})
home.addEventListener("click", () => {
    content.style.display = 'block'
    content_course_over.style.display = 'none'
})

const course_ins = document.querySelector('.Instructor')
const course_over = document.querySelector('.Overview')
const course_cur = document.querySelector('.Curriculum')
const LearnPress_course_ins = document.querySelector('.LearnPress_course_ins')
const LearnPress_course_over = document.querySelector('.LearnPress_course_over')
const LearnPress_course_cur = document.querySelector('.LearnPress_course_cur')
course_ins.addEventListener("click", () => {
    LearnPress_course_over.style.display = 'none'
    LearnPress_course_ins.style.display = 'flex'
    LearnPress_course_cur.style.display = 'none'
    course_over.style.backgroundColor = 'white'
    course_ins.style.backgroundColor = '#F5F5F5'
    course_cur.style.backgroundColor = 'white'
    course_over.style.color = 'black'
    course_ins.style.color = 'orange'
    course_cur.style.color = 'black'
})
course_over.addEventListener("click", ()=> {
    LearnPress_course_ins.style.display = 'none'
    LearnPress_course_over.style.display = 'flex'
    LearnPress_course_cur.style.display = 'none'
    course_ins.style.backgroundColor = 'white'
    course_over.style.backgroundColor = '#F5F5F5'
    course_cur.style.backgroundColor = 'white'
    course_ins.style.color = 'black'
    course_over.style.color = 'orange'
    course_cur.style.color = 'black'
})
course_cur.addEventListener("click", () => {
    LearnPress_course_over.style.display = 'none'
    LearnPress_course_ins.style.display = 'none'
    LearnPress_course_cur.style.display = 'flex'
    
    course_over.style.backgroundColor = 'white'
    course_ins.style.backgroundColor = 'white'
    course_cur.style.backgroundColor = '#F5F5F5'
    course_over.style.color = 'black'
    course_ins.style.color = 'black'
    course_cur.style.color = 'orange'
})
 
