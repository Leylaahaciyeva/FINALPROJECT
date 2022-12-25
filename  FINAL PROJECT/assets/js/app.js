let a1=document.querySelector('.a1')
let h_a=document.querySelector('.h-a')
let a2=document.querySelector('.a2')
let shop_a=document.querySelector('.shop-a')
let a3=document.querySelector('.a3')
let product_a=document.querySelector('.product-a')
let a4=document.querySelector('.a4')
let blog_a=document.querySelector('.blog-a')
let a5=document.querySelector('.a5')
let page_a=document.querySelector('.page-a')
a1.addEventListener('mouseover',()=>{

    h_a.classList.toggle('active')
})
a2.addEventListener('mouseover',()=>{

    shop_a.classList.toggle('active')
})
a3.addEventListener('mouseover',()=>{

    product_a.classList.toggle('active')
})
a4.addEventListener('mouseover',()=>{

    blog_a.classList.toggle('active')
})
a5.addEventListener('mouseover',()=>{

    page_a.classList.toggle('active')
})

let slideImages=[
    'assets/images/WhatsApp Image 2022-12-14 at 13.31.47 (1).jpeg',
    'assets/images/WhatsApp Image 2022-12-14 at 13.31.47.jpeg'
]
let currentSlide=0;
let image=document.querySelector('.animation img');
image.src=slideImages[currentSlide];
let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.onclick=function(){
    currentSlide++;
    if(currentSlide >slideImages.length-1){
        currentSlide=0;
    }
    image.src=slideImages[currentSlide]
}
prev.onclick=function(){
    currentSlide--;
    if(currentSlide===-1){
        currentSlide = slideImages.length-1;
    }
    image.src=slideImages[currentSlide]
}

function AutoPlay(){
    currentSlide++;
    if(currentSlide >slideImages.length-1){
        currentSlide=0;
    }
    image.src=slideImages[currentSlide]
}
setInterval(()=>{
    AutoPlay();
},3000);





  var thumbnails = document.getElementById("thumbnails")
  var imgs = thumbnails.getElementsByTagName("img")
  var main = document.getElementById("main")
  var counter=0;
  
  for(let i=0;i<imgs.length;i++){
    let img=imgs[i]
    
    
    img.addEventListener("click",function(){
    main.src=this.src
  })
    
  }
  $(".img_producto_container")

  .on("mouseover", function() {
    $(this)
      .children("#main")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function() {
    $(this)
      .children("#main")
      .css({ transform: "scale(1)" });
  })
  .on("mousemover", function(e) {
    $(this)
      .children("#main")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });
  $(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
let buttons=document.querySelectorAll('.t-nv button')
 for(let btn of buttons){
    btn.onclick=function(){
        let btn_1=document.querySelector('.btn1');
        btn_1.classList.remove('btn1')

        this.classList.add('btn1')

        let id=this.getAttribute('data-id');
        console.log(id);

        let contents=document.querySelectorAll('.a-tabs .tab')
        console.log(contents)

        for(let content of contents){
            if(content.getAttribute('id')===id){
                content.classList.remove('d-none')
            }
            else{
                content.classList.add('d-none')
            }
        }
    }
 }



 if(localStorage.getItem('pr-zoom') === null) {
    localStorage.setItem('pr-zoom',JSON.stringify([]))
}


let button = document.querySelectorAll('.add');

for(let btn of buttons) {
    btn.onclick = function(e) {
        e.preventDefault();

        let pr_price = document.querySelector('.price')
        let pr_image = document.querySelector('#main').src
        
        
        let basket = JSON.parse(localStorage.getItem('pr-zoom'));


        if(exist_prod === undefined) {
            basket.push({

                Price: pr_price,
                Image: pr_image,
                Count: 1,
            })
        }
        

        localStorage.setItem('pr-zoom',JSON.stringify(basket));
        
    }
}

function BasketCount() {
  let basket = JSON.parse(localStorage.getItem('pr-zoom'));
  document.getElementById('count').innerHTML =  basket.length;
}

 