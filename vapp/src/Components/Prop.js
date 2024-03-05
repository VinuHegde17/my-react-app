import React from "react";
function Bio(props) {
  return (
    <h1>
      Hello {props.name} {props.age}
    </h1>
  );
}

function Prop() {
  const data = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  };

  return (
    <div>
      <h4>My detail </h4>
      <Bio {...data} />
    </div>
  );
}

export default Prop;
