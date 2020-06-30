/*===========================
       banner part 
=============================*/

$('#banerpart').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<div class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>',
   prevArrow: '<div class="prevos"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    
});

/*===========================
       service part 
=============================*/
$('#img-slid').slick({
  dots: false,
  infinite: true,
   vertical:true,
    verticalSwiping: true,
  speed: 300,
    centerMode:true,
    centerPadding:0,
  slidesToShow: 3,
  slidesToScroll: 1,
    asNavFor:'#descrip',
  nextArrow: '<div class="next"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>',
  prevArrow: '<div class="prevos"><i class="fa fa-chevron-up" aria-hidden="true"></i></i></div>',
    
});


$('#descrip').slick({
    autoplay:false,
    arrows:false,
    fade:true,
  dots:false,
  infinite: true,
  speed: 300,
//    vertical:true,
//    verticalSwiping:true,
  slidesToShow: 1,
  slidesToScroll: 1,
//    centerMode:true,
//    centerPadding:0,
  
});



$('.slide-service').slick({
    autoplay:false,
    arrows:true,
    fade:false,
  dots:false,
  infinite: true,
  speed: 300,
    vertical:true,
//    verticalSwiping:true,
  slidesToShow: 3,
  slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
  nextArrow: '<div class="next"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>',
  prevArrow: '<div class="prevos"><i class="fa fa-chevron-up" aria-hidden="true"></i></i></div>',
  
});

/*=================venubox==============*/
   $('.venobox').venobox();





/*=========================
     client slider
==========================*/

$('.klen').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: false,
   prevArrow: false,
    
});

       

     //counter up
//$('.comain h1').counterUp();

let cnt = document.querySelectorAll('.comain ')
let cntarr = Array.from(cnt)

cntarr.map((enima)=>{
    let i = 0
    let end = enima.dataset.num
    let race = enima.dataset.sp
//    console.log(race)
    function canter(){
        enima.innerHTML = i
        if(i == end){
           clearInterval(stop)
           }
       
    }
     
    let stop = setInterval(()=>{
        canter()
        i++
    }, race)
    
})

 


