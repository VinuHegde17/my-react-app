import React, { useState, useLayoutEffect } from 'react';

function HLeffect() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const newWidth = document.getElementById('container').offsetWidth;
    setWidth(newWidth);
  }, []); 

  return (
    <div id="container" style={containerStyle}>
      <h2 style={titleStyle}>Use Layout Effect Example</h2>
      <p style={widthStyle}>The width of this container is: {width}px</p>
    </div>
  );
}

const containerStyle = {
  border: '1px solid black',
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  marginBottom: '10px', 
};

const widthStyle = {
  fontWeight: 'bold', 
};

export default HLeffect;
