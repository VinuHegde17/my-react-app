import React, { useState } from 'react';

function Keys() {
  const [name, setName] = useState('Ram');

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h4>Hello {name}</h4>
    </div>
  );
}

function ParentComponent() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <Keys key={version} />
    </div>
  );
}

export default ParentComponent;
