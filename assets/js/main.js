
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



  const imgClose = document.querySelectorAll('.form-close')
  imgClose.forEach(e => {
      e.addEventListener('click', ()=> {
        history.back()
      })
  })

   

function showPassword() {
    const eye = document.querySelectorAll('.see-password'),
          input = document.querySelectorAll('#user_password');
        //   formPassword = document.querySelectorAll('#form__password');
          eye.forEach((e)=> {
            const eyes = e.currentTarget;
              e.addEventListener('click', (element)=> {
                  input.forEach((item)=> {
                      if(item.type === 'password') {
                          item.type = 'text'
                        } else {
                            item.type = 'password'
                        }
                    })
                    const formPassword = document.querySelectorAll('.form__password');
                    formPassword.forEach(e => {

                        e.classList.toggle('hide')
                    })
                    const formPasswordConfirm = document.querySelector('.form__password');
                    formPassword.forEach(e => {
                        e.classList.toggle('hide')
                    })
            })
        })   
}
showPassword() 


function passwordEquality() {

}

function checkPassword() {
    const password = document.querySelector('#user_password');
    const formPassword = document.querySelector('.form__password');
    const forError = document.querySelector('.form-error')
    // password.value;
    console.log(password);
    password.addEventListener('input', e => {
        console.log(password.value)
        if(!password.value === '123123' ) {
            formPassword.classList.add('error')
        }else {
            formPassword.classList.remove('error')
        }
        console.log(forError);
    })
    // console.log(innerInput);
}
checkPassword()


console.log('Init!');

// inputmask
// const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(telSelector);

const validation = new JustValidate('.signin__form');

validation
  .addField('#user_login', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите логин!',
    },
    {
        rule: 'function',
        validator: function() {
            const forErr = document.querySelector('.input_user')
            forErr.classList.add('error')
       },
    }
  ])
  .addField('.form__password', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Неправильный пароль',
    },
    {
      rule: 'password',
      value: true,
      errorMessage: 'Введите корректный пароль',
    },
    {
        rule: 'function',
        validator: function() {
            const forErr = document.querySelector('.form-error')
            forErr.classList.add('error')
       },
    }
  ])
//   .addField('.input-tel', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Телефон обязателен',
//     },
//     {
//       rule: 'function',
//       validator: function() {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 10;
//       },
//       errorMessage: 'Введите корректный телефон',
//     },
//   ])
  .onSuccess((event) => {
    // console.log('Validation passes and form submitted', event);

    // let formData = new FormData(event.target);

    // console.log(...formData);

    // let xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       console.log('Отправлено');
    //     }
    //   }
    // }

    // xhr.open('POST', 'mail.php', true);
    // xhr.send(formData);

    // event.target.reset();
  });
