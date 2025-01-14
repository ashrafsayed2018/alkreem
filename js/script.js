const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})
document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    var name = document.getElementById('name').value
    var title = document.getElementById('title').value
    var message = document.getElementById('message').value
    var phoneNumber = '0530349227'

    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      'الاسم: ' + name + '\nالموضوع: ' + title + '\nالرسالة: ' + message
    )}`
    window.open(whatsappURL, '_blank')
  })
