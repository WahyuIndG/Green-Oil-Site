import UrlParser from '../routes/url-parser'
import Route from '../routes/route'

class App {
   constructor({content}) {
      this._content = content;
   }

   renderPage() {
      const path = UrlParser.getPath();
      const page = Route[path];
      this._content.innerHTML = page.render();

      const form = document.getElementById('form')
      const quantity = document.getElementById('quantity');
      const price = document.getElementById('price');
      const total = document.getElementById('total');

      quantity.addEventListener('change', () => {
         let amount = parseInt(price.placeholder)*parseInt(quantity.value);
         total.value = amount >= 0 ? amount : '0';
      })
      quantity.addEventListener('keyup', () => {
         let amount = parseInt(price.placeholder)*parseInt(quantity.value);
         total.value = amount >= 0 ? amount : '0';
      });
      
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         form.reset();
         console.log('form submitted');
      })
   }
}

export default App;