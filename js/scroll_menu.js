var wrapper = document.querySelector('#wrapper')


document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 300) {
        wrapper.classList.add('opa');
    } else {
        wrapper.classList.remove('opa')
    }
    if (window.pageYOffset <= 300) {
        wrapper.classList.add('vis');
    } else {
        wrapper.classList.remove('vis')
    }

})




