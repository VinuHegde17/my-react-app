import React, { forwardRef, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => <input ref={ref} />);

const ParentComponent = () => {
  const childRef = useRef(null);

  const focusInput = () => childRef.current.focus();

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
