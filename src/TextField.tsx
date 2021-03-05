import React, { useState, useRef, useEffect } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode | undefined>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Component Mounted");

    let arr = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ];

    interface obj {
      id: number;
    }

    interface Acc {
      array: [obj,obj];
    }

    interface big {
      array: Acc[];
    }

  

    let reducedArr = arr.reduce((accumulator: Acc[], currEle, index) => {
      return (
        (index % 2 === 0
          ? accumulator.push([currEle])
          : accumulator[accumulator.length - 1].push(currEle)) && accumulator
      );
    }, []);

    reducedArr.map((item) => {
      // return (
      //   <>
      //     <div></div>

      //     <div></div>
      //   </>
      // );
      // console.log("TextField", typeof item);

      // for (let ele of item) {
      //   console.log("elements", ele);
      // }

      // item.map;

       return item.map((ele:  obj) => {

          console.log(ele);

      })
      // return item.map(ite: any[] =>{

      //   return console.log(ite);
      // })
    });

    console.log("reduced arr", reducedArr);
  }, []);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
