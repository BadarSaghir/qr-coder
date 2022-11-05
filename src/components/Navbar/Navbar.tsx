import React from "react";
import { NavItem } from "./NavItem";
import { useNavStore } from "./store/navStore";

type Props = {
  height?: string | number;
  width?: string | number;
};

const Navbar = (props: Props) => {
  const { toggleSelection, items } = useNavStore();

  return (
    <div className="absolute bottom-16 shad top-16 flex border-solid border-2 p-6 ">
      {" "}
      <div className="min-w-[65px] h-full flex flex-col shadow-xl justify-around items-center text-center bg-tertiary rounded-full gap-3 p-4 pt-6 pb-6">
        {/* {items[0].icon} */}
        {/* jj */}
        {/* <NavItem icon="hell" selected={false} /> */}
        {items.map((item, idx) => {
          return (
            <NavItem
              key={idx}
              icon={item.icon}
              selected={item.selected}
              idx={idx}
              toggleSelection={toggleSelection}
            />
          );
        })}
        {/* <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div>
        <div className="border-solid flex-1 border-2">icon</div> */}
      </div>
    </div>
  );
};

export default Navbar;
