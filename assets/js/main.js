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