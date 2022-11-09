import React, { PropsWithChildren, useRef, useState } from "react";
import DownArrow from "@heroicons/react/20/solid/ChevronDownIcon";
import UpArrow from "@heroicons/react/20/solid/ChevronUpIcon";
import { motion, useCycle, Variants } from "framer-motion";
import { AnimateHeight } from "./animation/AnimationHeight";
// import { sidebar } from "./Animation";

// import styles from "./Input.module.css";

const liVariants: Variants = {
  open: {
    display: "block",
    height: "100%",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },

      // staggerChildren: 0.05,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
  closed: {
    y: 50,
    height: "80%",
    display: "none",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },

      // staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const hiVariants: Variants = {
  open: {
    height: "auto",

    transition: {
      y: { stiffness: 1000 },

      // staggerChildren: 0.05,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
  closed: {
    height: "auto",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },

      // staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

type Props = {
  style?: React.CSSProperties | undefined;
  title?: string;
} & PropsWithChildren;

const Input = (props: Props) => {
  const [isOpen, toggleOpen] = useState(true);
  const [isChildOpen, setIsChildOpen] = useState(false);

  const variantsMainDiv = {
    open: {
      opacity: 1,
      height: "auto",
      display: "block",
      x: 0,
    },
    collapsed: { display: "none", opacity: 1, height: "auto" },
  };
  const variants = {
    open: {
      opacity: 1,
      height: "100%",
      x: 0,
    },
    collapsed: { opacity: 1, height: "100%" },
  };

  const inRef = useRef<HTMLDivElement>(null);
  function handleInput(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    console.debug(e.currentTarget.offsetHeight);
    console.debug(inRef.current?.offsetHeight);

    toggleOpen(!isOpen);
  }
  return (
    <AnimateHeight variants={variants} isVisible={isOpen}>
      <motion.div
        onClick={handleInput}
        className="App rounded-lg flex flex-col p-5 w-[100%]  bg-secondary_light"
        style={props.style}
      >
        <motion.div className={`background flex justify-between`}>
          <div className="text-xs font-bold uppercase">{props.title}</div>
          <div>
            {""}
            {!isOpen ? (
              <DownArrow className={``} color="#fffff" height={14} />
            ) : (
              <UpArrow className={``} color="#fffff" height={14} />
            )}
          </div>
        </motion.div>
        <AnimateHeight variants={variantsMainDiv} isVisible={isOpen}>
          <motion.div ref={inRef}>{props.children}</motion.div>
        </AnimateHeight>

        {/* <motion.div
        animate={isChildOpen ? "open" : "closed"}
        variants={liVariants}
        className="p-1"
      >
        {props.children}
      </motion.div> */}
      </motion.div>
    </AnimateHeight>
  );
};

export default Input;
