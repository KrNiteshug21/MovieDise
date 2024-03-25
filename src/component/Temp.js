"use client";

import React, { useState } from "react";

const childrens = [1, 2, 3, 4];

const Child = React.forwardRef((props, ref) => {
  const [inp, setInp] = useState(0);
  const [res, setRes] = useState(null);

  const runner = async () => {
    // Simulating an asynchronous operation with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(inp);
      }, 1000);
    });
  };

  // Expose the runner function and inp state through ref
  React.useImperativeHandle(ref, () => ({
    runner,
    inp,
  }));

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRes(+runner() + 1);
        }}
      >
        <input
          type="number"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button type="submit">Eval</button>
        <p>{res}</p>
      </form>
      <button onClick={() => setRes(null)}>Clear</button>
    </>
  );
});

const Temp = () => {
  const childRefs = childrens.map(() => React.createRef());

  const superRun = async () => {
    const childInfo = await Promise.all(
      childRefs.map(async (childRef) => {
        // Access runner function and inp state from each child
        const { runner, inp } = childRef.current;
        const x = await runner();
        return { x, inp };
      })
    );

    // Now you have an array of runner functions and inp states from all children
    console.log(childInfo);
  };

  return (
    <div>
      {childrens.map((el, index) => {
        return <Child key={el} ref={childRefs[index]} />;
      })}

      <button onClick={superRun}>Super Run</button>
    </div>
  );
};

export default Temp;
