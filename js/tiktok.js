//expand suggestions

const suggestedCont = document.querySelector('.suggested__container')
const suggestedBtn = document.querySelector('.suggested__btn')

suggestedBtn.addEventListener('click', () => {

 suggestedCont.classList.toggle =('expanded');

 if (suggestedCont.classList.contains('expanded')){
    suggestedBtn.innerHTML = 'See less '
 } else {
    suggestedBtn.innerHTML = 'See all '
 }
});