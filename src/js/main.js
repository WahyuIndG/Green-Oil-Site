import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import '../css/style.css';
import App from './views/app';

const app = new App({
   content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
   app.renderPage();
});

window.addEventListener('load', () => {
   document.querySelector('.loader-background').style.display = 'none';
   app.renderPage();
})
