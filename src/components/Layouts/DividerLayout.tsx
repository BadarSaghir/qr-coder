import React, { HTMLAttributes, PropsWithChildren } from "react";

type Props = {} & PropsWithChildren<{}>;

const DividerLayout = (props: Props) => {
  return (
    <div
      className={
        "flex h-[100%] w-[100%] bg-primary flex-row firstChild:flex-[2] items-center justify-center text-center secondChild:bg-secondary secondChild:flex-1 px-8 "
      }
    >
      {props.children}
    </div>
  );
};

export default DividerLayout;
