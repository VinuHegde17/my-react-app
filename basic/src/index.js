var React = require("react");
var ReactDOM = require("react-dom");
const name="Akash";

ReactDOM.render(
   <div><div>
   <h1>Hello World!</h1>
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, excepturi?
   </p>
 </div>,
<div>
  <h1>My favourite food</h1>
  <ul>
  <li>Bacon</li>
  <li>Jamon</li>
  <li>Noodles</li>
  </ul>
</div>,
<div>
<h1>My name is {name}</h1>
<p>My favourite number is {Math.random()}</p>
</div>,
</div>,
  document.getElementById("root")
);