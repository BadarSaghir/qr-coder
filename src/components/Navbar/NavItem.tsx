import Link from "next/link";
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
    <div className="border-b-[1px] border-b-solid border-b-shadow_transparent pb-2">
      <Link href={link ?? ""}>
        <button
          onClick={() => {
            toggleSelection(idx);
          }}
          className={
            "h-9 w-9  flex items-center  justify-center rounded-3xl " +
            (selected
              ? " p-2.5 bg-secondary text-tertiary shadow-lg shadow-shadow_transparent"
              : " p-2  bg-tertiary text-primary_dark")
          }
        >
          {icon}
        </button>
      </Link>
    </div>
  );
};
