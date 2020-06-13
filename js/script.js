function addClass(selList, selBurger){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')
    })
}
addClass('.header__menu', '.header__burger')
;
const slider = (slides, prew, next) => {
    let index = 1
    const items = document.querySelectorAll(slides),
          prewBtn = document.querySelector(prew),
          nextBtn = document.querySelector(next);
    
    function showSlides (n){
        if(n > items.length){
            index = 1
        }
        
        if(n < 1){
            index = items.length
        }

        items.forEach(item => {
            item.style.display = 'none'
        })

        items[index - 1].style.display = 'flex'
    }

    showSlides(index)

    function plusSlides(n){
        showSlides(index += n)
    }

    prewBtn.addEventListener('click', () => {
        plusSlides(-1)
    })

    nextBtn.addEventListener('click', () => {
        plusSlides(1)
    })

}
slider('.slider-item', '.slider__next', '.slider__prew');
function ibg (){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
     if(ibg[i].querySelector('img')){
       ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
ibg();;