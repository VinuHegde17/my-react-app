import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    doSomething: () => {
      console.log('Child component did something');
    },
    someValue: 'Hello from child',
  }));

  return <div>Child Component</div>;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.doSomething();
  };

  const handleGetValue = () => {
    console.log(childRef.current.someValue);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Do Something</button>
      <button onClick={handleGetValue}>Get Value</button>
    </div>
  );
};

export default ParentComponent;
