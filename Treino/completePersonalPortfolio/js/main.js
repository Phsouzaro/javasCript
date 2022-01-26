/* Navigation  bar effects on scroll */
/* window.addEventListener('scroll', function () {
 const header = document.querySelector('header')
 header.classList.toggle('sticky', window.scrollY > 0)
})
window.addEventListener('click', function (e) {
 const target = e.target;
 if (target.classList.contains('learn-more-btn') || target.classList.contains('modal-close-btn')) {
  const learnMore = document.querySelector('.service-modal')
  learnMore.classList.toggle('hidden')
 }
}) */
//Services Section
const serviceModals = document.querySelectorAll('.service-modal')
const learMoreBtns = document.querySelectorAll('.learn-more-btn')
const modalCloseBtns = document.querySelectorAll('.modal-close-btn')

let modal = (modalClick) => {
 serviceModals[modalClick].classList.add('active')
}

learMoreBtns.forEach((learMoreBtn, i) => {
 learMoreBtn.addEventListener('click', () => {
  modal(i);
 })
})
modalCloseBtns.forEach((modalCloseBtn) => {
 modalCloseBtn.addEventListener('click', () => {
  serviceModals.forEach((modalView) => {
   modalView.classList.remove('active')
  })
 })
})


//Portfolio section

const portfolioModals = document.querySelectorAll('.portfolio-model')
const imgCards = document.querySelectorAll('.overlay')
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn')

let portfolioModal = (modalClick) => {
 portfolioModals[modalClick].classList.add('active')
}

imgCards.forEach((imgCard, i) => {
 imgCard.addEventListener('click', () => {
  portfolioModal(i);
 })
})
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
 portfolioCloseBtn.addEventListener('click', () => {
  portfolioModals.forEach((portfolioModalView) => {
   portfolioModalView.classList.remove('active')
  })
 })
})

