/*jshint esversion: 6 */
const html = require('choo/html');


// export module
module.exports = function () {
  // create html template
  return html`
  <body>
    <div>Hello world!</div>
    <div class="sidebar">
        <a href="#">About</a>
        <a href="#">Test</a>
        <a href="#">Choo</a>
        <a href="#">Electron</a>
    </div>
  </body>`;
};
