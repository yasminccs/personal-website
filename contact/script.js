const nameInput = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const fieldText = document.querySelector('#fieldMsg')

const msgBox = document.querySelector('.msg-box')

document.querySelector('#btn').addEventListener('click', function () {
   if (nameInput.value.length == 0 || lastName.value.length == 0 || email.value.length == 0 || fieldText.value.length == 0) {
    alert('Campo vazio.')
   } else {
      msgBox.style.display = 'flex'
   }
   document.querySelector('#close').addEventListener('click', function () {
      msgBox.style.display = 'none'
   })
})

const nav_menu = document.querySelector('#container-menu')
document.querySelector('#menu-burguer').addEventListener('click', function () {
   if(nav_menu.style.display == 'none'){
      nav_menu.style.display = 'block'
   } else {
      nav_menu.style.display = 'none'
   }
})

