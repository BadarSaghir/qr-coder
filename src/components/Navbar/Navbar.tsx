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
    <div className="absolute bottom-20 top-20 flex border-solid border-2 p-8 ">
      {" "}
      <div className="min-w-[30px] relative h-full flex flex-col shadow-xl justify-around items-center text-center bg-tertiary rounded-full gap-1 p-3 py-6">
        {/* {items[0].icon} */}
        {/* jj */}
        {/* <NavItem icon="hell" selected={false} /> */}
        {items.map((item, idx) => {
          return (
            <NavItem
              key={idx}
              icon={item.icon}
              selected={item.selected}
              link={item.link}
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
