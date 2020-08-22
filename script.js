var imgs = document.querySelectorAll("img");
var text = document.querySelectorAll("span");
for (var i=0; i<imgs.length; i++){
    imgs[i].addEventListener("click",function(){
        // console.log(this)
        // this.classList.toggle("toggleclass")
        // for (var j=0 ; j< text.length; j++){
        //     text[j].addEventListener("click",function(){
        //         console.log(this)
        //     })
        // }
        console.log(this)
        ran = this.nextElementSibling.getElementsByTagName("span");
        console.log(ran[0])
        ran[0].classList.toggle("hide")
        console.log(ran[0])
        // ran[0].addEventListener("click",function(){
        //     this.classList.toggle("unhide")
        // })
        
    
        // text[i].addEventListener(function(){
        //     console.log(this)
        // })
        
        
    });
    imgs[i].addEventListener("mouseout",function(){
        ran = this.nextElementSibling.getElementsByTagName("span");
        console.log(ran[0])
        ran[0].classList.add("hide")
    })
}
// p.addEventListener("click", function(){
//     console.log("someone clicked image");
// })