import React, { PropsWithChildren, useState } from "react";
import DownArrow from "@heroicons/react/20/solid/ChevronDownIcon";
import UpArrow from "@heroicons/react/20/solid/ChevronUpIcon";

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
      className="rounded-lg flex flex-col p-4 bg-secondary_light"
      style={props.style}
    >
      <div className="flex justify-between">
        <div>a</div>
        <div>
          {" "}
          {isOpen ? (
            <DownArrow color="#fffff" height={24} />
          ) : (
            <UpArrow color="#fffff" height={24} />
          )}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Input;
