const cards_animation = ()=>{
    var swiper = new Swiper(".swiper" ,{
        effect:"coverflow" , 
        gradCursor:true,
        centeredSlides:true,
        initialSlide:2,
        speed:600 , 
        preventClicks:true,
        slidesPerView:"auto",
        coverflowEffect:{
            rotate:0,
            stratch:80 , 
            depth:350 ,
            modifier:1 ,
            slideShadows:true,
        },
        on:{
            click(event){
                swiper.slideTo(this.clickedIndex);
            },
        },
        pagination:{
            el:".swiper-pagination",
        },
    });
}

export default cards_animation;