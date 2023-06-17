const UrlParser = {
   getPath() {
      const path = window.location.hash.slice(1);
      const result = path ? path : `/`;
      return result;
   }
}

export default UrlParser;  