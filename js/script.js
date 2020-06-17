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
const scrolling = (selectorUp) => {
    const up = document.querySelector(selectorUp)
    window.addEventListener('scroll',function(){
        if(document.documentElement.scrollTop > 1600){
            up.style.opacity = '1'
            up.style.transition = '0.4s ease'
        } else{
            up.style.opacity = '0'
            up.style.transition = '0.4s ease'
        }
    })
    const body = document.body,
          element = document.documentElement
    
    const calcScroll = () => {
        up.addEventListener('click',function(event){
            let scrollTop = Math.round(body.scrollTop || element.scrollTop)

            if(this.hash !== ''){
                event.preventDefault()
                let elemHash = document.querySelector(this.hash),
                    parentHash = 0
                
                while(elemHash.offsetParent){
                    parentHash += elemHash.offsetTop
                    elemHash = elemHash.offsetParent
                }

                parentHash = Math.round(parentHash)
                smoothScroll(scrollTop, parentHash, this.hash)

            }
        })
    }
    const smoothScroll = (from, to, hash) =>{
        let timeInterval = 1,
            prevScrollTop,
            speed
        
        if(to > from){
            speed = 30
        }else{
            speed = -30
        }

        let move = setInterval(function(){
            let scrollTop = Math.round(body.scrollTop || element.scrollTop)

            if(
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ){
                clearInterval(move)
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
            } else{
                body.scrollTop += speed
                element.scrollTop += speed
                prevScrollTop = scrollTop
            }
        }, timeInterval)
    }
    calcScroll()
}
scrolling('.anchor');