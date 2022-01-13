/* Navigation  bar effects on scroll */
window.addEventListener('scroll', function(){
 const header = document.querySelector('header')
 header.classList.toggle('sticky', window.scrollY > 0)
})
window.addEventListener('click', function(e){
const target = e.target;
if(target.classList.contains('learn-more-btn')||target.classList.contains('modal-close-btn')){
 const learnMore = document.querySelector('.service-modal')
 learnMore.classList.toggle('hidden')

}
})