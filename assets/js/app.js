jQuery(function (){
  $('.jumbotron').owlCarousel({
      loop:true,
      autoplay: true,
      margin:10,
      nav:false,
      items: 1,
      linked: ".backgroundSlideshow__wrap"
  })

  $('.backgroundSlideshow__wrap').owlCarousel({
      loop:false,
      animateOut: 'fadeOut',
      margin:0,
      autoplay: true,
      nav:false,
      items: 1,
      linked: ".jumbotron",
      dots: false
  })


})
