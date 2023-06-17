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
   }
}

export default App;