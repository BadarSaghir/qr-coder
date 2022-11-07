import React, { PropsWithChildren, useState } from "react";
import DownArrow from "@heroicons/react/20/solid/ChevronDownIcon";
import UpArrow from "@heroicons/react/20/solid/ChevronUpIcon";
import { motion, useCycle, Variants } from "framer-motion";
// import { sidebar } from "./Animation";

// import styles from "./Input.module.css";

const variantsInput: Variants = {
  open: {
    opacity: 1,
    scaleY: 1,
    // height: "100%",
    visibility: "visible",
    transition: { ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    scaleY: 0.2,
    // height: 0,
    visibility: "hidden",
    display: "none",
    transition: { ease: "easeIn" },
  },
};
const mainDiv: Variants = {
  open: {
    scaleY: 1,
    // opacity: 1,
    // height: "100%",
    // display: "block",
    transition: { ease: "easeOut" },
  },
  closed: {
    scaleY: 0.9,

    // opacity: 0,
    // height: 0,
    // display: "none",
    transition: { ease: "easeOut" },
  },
};

type Props = {
  style?: React.CSSProperties | undefined;
} & PropsWithChildren;

const Input = (props: Props) => {
  const [isOpen, toggleOpen] = useState(true);

  function handleInput(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    toggleOpen(!isOpen);
  }

  return (
    <motion.div
      variants={mainDiv}
      onClick={handleInput}
      className="App rounded-lg flex flex-col p-4 w-[100%] bg-secondary_light"
      style={props.style}
      animate={isOpen ? "open" : "closed"}
      // className={`${isOpen ? "" : ""}`}
      initial={false}
    >
      <motion.div className={`background flex justify-between`}>
        <div className="text-sm font-bold uppercase">Frame</div>
        <div>
          {" "}
          {isOpen ? (
            <DownArrow className={``} color="#fffff" height={16} />
          ) : (
            <UpArrow className={``} color="#fffff" height={16} />
          )}
        </div>
      </motion.div>
      {/* <motion.div variants={sidebar} className={`${isOpen ? "" : "hidden"}`}>
        {props.children}
      </motion.div> */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        // className={`${isOpen ? "" : ""}`}
        variants={variantsInput}
        initial={false}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export default Input;

