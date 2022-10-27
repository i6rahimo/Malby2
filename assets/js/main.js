
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
    // pagination: {
    //   clickable: true,
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },
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
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      draggable: true,  
      el: '.swiper-scrollbar',
    },
  });


// тебе нужно небольшой скрипт написать, который ищет номер слайда и подставляет его стили кружочка типа scaleX( calc(1 * [номер слайда]) )



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
        // const oldUrl = document.referrer;
        // window.history.back()
        history.go(-1);
return false;
      })
  })

   
  function showPasswordSign() {
    const eye = document.querySelector('.see-password-signin'),
          input = document.querySelector('#user_password-signin'),
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
showPasswordSign();
function showPasswordSignUp() {
    const eye = document.querySelector('.see-password-signup'),
          input = document.querySelector('#user_password'),
          formPassword = document.querySelector('.form__password-signup');

          eye.addEventListener('click', ()=> {
            if(input.type === 'password') {
                input.type = 'text'
              } else {
                  input.type = 'password'
              }
            formPassword.classList.toggle('hide')
          })
                  }
showPasswordSignUp() 
function showPasswordConfirm() {
  const eye = document.querySelector('.see-password-confirm'),
          input = document.querySelector('#user_password-confirm'),
          formPassword = document.querySelector('.form__password-confirm');

          eye.addEventListener('click', ()=> {
            if(input.type === 'password') {
                input.type = 'text'
              } else {
                  input.type = 'password'
              }
              formPassword.classList.toggle('hide')
          })
                  
                }
showPasswordConfirm() 

function passwordEquality() {

}

// function checkPassword() {
//     const password = document.querySelector('#user_password');
//     const formPassword = document.querySelector('.form__password');
//     const forError = document.querySelector('.form-error')
//     // password.value;
//     console.log(password);
//     password.addEventListener('input', e => {
//         console.log(password.value)
//         if(!password.value === '123123' ) {
//             formPassword.classList.add('error')
//         }else {
//             formPassword.classList.remove('error')
//         }
//         console.log(forError);
//     })
//     // console.log(innerInput);
// }
// checkPassword()

// function sighupPassword() {
//   const eye = document.querySelector(".see-password-confirm");
//   const formPassword = document.querySelector('.form__password-confirm');
//   const input = document.querySelector('#user_password')
//   eye.addEventListener('click', ()=> {

//       if(item.type === 'password') {
//           item.type = 'text'
//         } else {
//             item.type = 'password'
//         }
//     formPassword.classList.toggle('hide')
//     console.log(formPassword);
//   })
// }
// sighupPassword()
// function validate() {
//   const form = document.querySelector('#signin__form')
//   // console.log(password);
//   form.addEventListener('submit', ()=> {
//     const password = document.querySelector('.input__password-wrapper input').value
//     console.log(password);
//     if(!password === "") {
//       console.log('qwe');
//     }else {
//       const forerror = document.querySelector('.form__password')
//       // console.log('pppppppppp');
//     }
//   })
// }

// validate()