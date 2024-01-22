import app from './src/js/app';
const linkcheck = document.querySelector('.wrongpage')
if(linkcheck){
let link = linkcheck.dataset.link
    localStorage.setItem('prevlink', link)
    location.href = '/index.html'
}
app();
