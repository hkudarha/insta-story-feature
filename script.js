var arr=[
    {dp:"https://media.istockphoto.com/id/1160178983/photo/funky-afro-girl-against-yellow-background.jpg?s=170667a&w=0&k=20&c=6CdMGE6kkvH_Npyr0V7XYFvVm-ZGvllT82laD9vWKN8=" , img:"https://media.istockphoto.com/id/1169378197/photo/stylish-shopaholic-with-purchases.jpg?b=1&s=170667a&w=0&k=20&c=bYX4o2vVvmJ5YETG4lCHKu8grDvoHQ0EJphMVofPsZo="},
    {dp:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80", img:"https://i.pinimg.com/474x/7f/4f/cc/7f4fccf6658dc8876092750b2c6587f4--brooklyn-blonde-wrap-coat.jpg"},
    {dp:"https://media.istockphoto.com/id/1347495819/photo/man-wearing-sunglasses-on-yellow.jpg?b=1&s=170667a&w=0&k=20&c=XthvuKTi3NQ3AjGQGaOqW_4rQQvSEmAjEYI5lma8gp0=", img:"https://media.istockphoto.com/id/1232773089/photo/portrait-of-a-young-handsome-african-man.jpg?s=170667a&w=0&k=20&c=EmogcSRMRLqTqQCjmi7KhSFjPSA2d8bfqF-nmyiKZk4="},
    {dp:"https://media.istockphoto.com/id/1134003334/photo/young-woman-walking-on-street.jpg?b=1&s=170667a&w=0&k=20&c=YzxjabZmxteODA-Fo5n90Hy5hOScysQvKkchuPEtHWo=", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxwDjqLT_ne93zweJ1xceKURYXm5ayrd1vJE6NUQgOmK37kdJWJ4y9H3xnRe5zha0MGE&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6P5jkG6nvsHM4X5FC76R5AbfhI-ZylS64axk2V5kw8Z38IZa-10HN4UAB1vq8QHgYts&usqp=CAU" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFw4-ZhLq7yEeGBJCG0M7OuPT4ak_1PgbD_mc2MyTXB7-OEsBC6Zage_FhaQ8O2nP-rIU&usqp=CAU"},
    {dp:"https://images.unsplash.com/photo-1552256552-e8149de77b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDQ0NDQ0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80", img:"https://iv1.lisimg.com/image/23550452/740full-daria-milky.jpg"}
]
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector("#storys").innerHTML =clutter

var grow = 0

document.querySelector("#storys").addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].img)
    document.querySelector("#full-scr").style.display="block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.display = 'none'
    },3000)

    if(grow<100){
        setInterval(function(){
            document.querySelector("#growth").style.width = `${grow++}%`
    
        },30)   
    }else{
        grow=0
    }
    
})
