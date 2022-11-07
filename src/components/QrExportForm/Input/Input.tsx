import React, { PropsWithChildren, useState } from "react";
import DownArrow from "@heroicons/react/20/solid/ChevronDownIcon";
import UpArrow from "@heroicons/react/20/solid/ChevronUpIcon";
import style from "./input.module.css";
type Props = {
  style?: React.CSSProperties | undefined;
} & PropsWithChildren;

const Input = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    setIsOpen((state) => {
      return !state;
    });
  }

  return (
    <div
      onClick={handleInput}
      className="rounded-lg flex flex-col p-4 w-[100%] bg-secondary_light"
      style={props.style}
    >
      <div className="flex justify-between">
        <div className="text-sm font-bold uppercase">Frame</div>
        <div>
          {" "}
          {isOpen ? (
            <DownArrow className={``} color="#fffff" height={16} />
          ) : (
            <UpArrow className={``} color="#fffff" height={16} />
          )}
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>{props.children}</div>
    </div>
  );
};

export default Input;
