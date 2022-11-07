import React from "react";
import Button from "@mui/material/IconButton";

type Props = {
  text?: string;
  style?: React.CSSProperties;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
  return (
    <Button
      onClick={props.onclick}
      className="rounded-full py-6 px-12 text-xs font-bold  text-tertiary"
      style={props.style}
    >
      {props.text}
    </Button>
  );
};

export default IconButton;
