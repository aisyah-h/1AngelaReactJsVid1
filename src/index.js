//method 1:
/*create variable called React set equal to require
specify react module that's been installed as the module we require
we're binding it to the react variable
*/
//var React = require("react");
//same thing as above for react-dom module:
//var ReactDOM = require("react-dom");
// now we can use both packages
//===========//

//Method 2 -- importing/exporting:
import React from "react";
import ReactDOM from "react-dom";

/*to use react to create something on screen, use render function
tap into ReactDOM (which we created above)
this gives us access to react-dom module
we're going to tap into its render function
*/
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
/*line above: we used react-dom module's render method in order to display a h1 inside that root div
  when we use this render method it can only take a single html element
  so adding <p></p> element above (without nestling in <div></div>) crashes the prog
  */
