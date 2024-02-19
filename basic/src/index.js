var React = require("react");
var ReactDOM = require("react-dom");
const name="Akash";
const place="Kundapur";
const cpy=2019
ReactDOM.render(
   <div><div>
   <h1>Hello World!</h1>
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, excepturi?
   </p>
 </div>
 <hr></hr>
<div>
  <h1>My favourite food</h1>
  <ul>
  <li>Bacon</li>
  <li>Jamon</li>
  <li>Noodles</li>
  </ul>
</div>

<hr></hr>
<div>
<h1>My name is {name+" "+place}</h1>
<p>My favourite number is {Math.random()}</p>
</div>
<hr></hr>
<div>
<p>My name is {name}</p>
<p>©{cpy}</p>
</div>
<hr></hr>
</div>,
  document.getElementById("root")
);

