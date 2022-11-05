import React from "react";
import { IItem } from "./elements";

type PropNavItem = {
  item: IItem;
};
export const NavItem = ({
  icon,
  link,
  selected,
  idx,
  toggleSelection,
}: IItem & { idx: number; toggleSelection: (idx: number) => IItem }) => {
  return (
    <div
      onClick={() => {
        toggleSelection(idx);
      }}
      className={
        "h-12 w-12 flex items-center justify-center rounded-full border-2 border-solid border-secondary" +
        (selected
          ? " bg-secondary text-tertiary"
          : " bg-tertiary text-primary_dark")
      }
    >
      {icon}
    </div>
  );
};
