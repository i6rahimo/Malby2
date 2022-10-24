
function tabBtn() {

    const btn = document.querySelectorAll('.can__item');
    btn.forEach(e => {
        e.addEventListener('click', ()=> {
            btn.forEach((e) => {
                e.classList.remove('active')
            })
            e.classList.add('active')
        })
})
}

tabBtn();


function headerNavShow() {
    const burger = document.querySelector('.header__burger'),
          nav = document.querySelector('.header__nav');

    burger.addEventListener('click', (el)=> {
        nav.classList.toggle('active')
        burger.classList.toggle('active')
    })
}
headerNavShow()


function accordionOpen() {
    const accordionItem = document.querySelectorAll('.accordion__item')
    accordionItem.forEach(e => {
        e.addEventListener('click', el => {
            const self = el.currentTarget;
            self.classList.toggle('open')
            console.log(self);
        })
    })
}
accordionOpen()


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 30,
    centeredSlides:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
          centeredSlides:true,
        },
        // when window width is >= 480px
        520: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1116: {
            slidesPerView: 4,
          spaceBetween: 30
        } 
    }
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });





  function historyTabs() {
    const historyTabsBtn = document.querySelectorAll('.history__item');
    const tabsItem = document.querySelectorAll('.history__takes')
    historyTabsBtn.forEach(e => {
        e.addEventListener('click', ()=> {
            let tabId = e.getAttribute('data-tab');
            const curretntTab = document.querySelector(tabId)
            
            
            tabsItem.forEach((e)=> {
                e.classList.remove('active')                
            })
            curretntTab.classList.add('active')
        })
    })
  }

  historyTabs()



  const imgClose = document.querySelector('.form-close').addEventListener('click', closeForm)
function closeForm() {
        history.back()
}


function showPassword() {
    const eye = document.querySelector('.see-password'),
          input = document.querySelector('#user_password'),
          formPassword = document.querySelector('.form__password'); 
    eye.addEventListener('click', ()=> {
        if(input.type === 'password') {
            input.type = 'text'
        } else {
            input.type = 'password'
        }
        formPassword.classList.toggle('hide')
    })
}

showPassword()