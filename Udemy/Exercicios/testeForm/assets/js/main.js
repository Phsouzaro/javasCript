(function () {
 const inputUser = document.querySelector('#nometxt');
 document.addEventListener('click', (e) => {
  const event = e.target;
  const radiouser = document.querySelector('#radioUser')
  const radiomail = document.querySelector('#radioMail')
  const radioMailRep = document.querySelector('#radioMailRep')
  const radioPass = document.querySelector('#radioPass')
  if (event.classList.contains('user')) {
   radiouser.setAttribute('checked', 'checked')
  }
  if (event.classList.contains('mail')) {
   radiomail.setAttribute('checked', 'checked')
  }
  if (event.classList.contains('mailrep')) {
   radioMailRep.setAttribute('checked', 'checked')
  }
  if (event.classList.contains('pass')) {
   radioPass.setAttribute('checked', 'checked')
  }
 });
})()


