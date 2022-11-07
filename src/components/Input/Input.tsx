import React, { PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties | undefined;
} & PropsWithChildren;

const Input = (props: Props) => {
  return (
    <div className="rounded-lg p-3 bg-secondary_light" style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};

export default Input;
