$('section li').mousewheel(function(event){
    console.log( event.deltaX,  event.deltaY, event.deltaFactor );
    // event.deltaY :  휠을 아래로 -1, 위로 1
    let sectionTop ; 
    let index = $(this).index(); 

    if( event.deltaY > 0){
        sectionTop = $(this).prev().offset().top; 
        index--; 
    }else if( event.deltaY < 0 ){
        sectionTop = $(this).next().offset().top;
        index++; 
    }

    init(index, sectionTop);
})