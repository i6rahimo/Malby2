const btn = document.querySelectorAll('.can__item');
btn.forEach(e => {
    console.log(e);
    e.addEventListener('click', el => {
        const self = el.currentTarget;
        console.log(self);
        self.classList.toggle('active')

        if(e.contains('active')) {
            console.log('Yes');
        }else {
            console.log('No');
        }
    })
})



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
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
    //   el: '.swiper-scrollbar',
    },
  });
  