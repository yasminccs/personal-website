const nav_icon = document.querySelector('#menu-burguer').addEventListener('click', function () {
   const nav_menu = document.querySelector('#container-menu')
   if(nav_menu.style.display = 'none'){
      nav_menu.style.display = 'block'
   } else {
      nav_menu.style.display = 'none'
   }

})

// const nameInput = document.querySelector('#name').value
// const lastName = document.querySelector('#last-name').value
// const email = document.querySelector('#email').value

// const msgBox = document.querySelector('.msg-box')

// document.querySelector('#btn').addEventListener('click', function () {
//    if (nameInput.length === 0 || lastName.length === 0 || email.length === 0) {
//     alert('campo vazio')
//    }

// console.log(nameInput, lastName, email)

// })

// if(nameInput == " " && lastName == " " && email == " ") {
//     alert('Campos vazios.')
//  } else {
//     msgBox.style.display = 'flex'
//  }
//  document.querySelector('#close').addEventListener('click', function () {
//     msgBox.style.display = 'none'
//     })