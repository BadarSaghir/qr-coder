import create from "zustand";
import { IItem } from "../elements";

export const useNavStore = create<{
  items: IItem[];
  selected: boolean;
  addNavItem: (item: IItem) => void;
  getNavItems: () => IItem[];
  init: (item: IItem[]) => void;
  toggleSelection: (idx: number) => IItem;
}>((set, get) => ({
  selected: false,
  items: [
    {
      icon: "Abc",
      selected: false,
      link: "s",
    },
    {
      icon: "Abc",
      selected: false,
      link: "s",
    },
    {
      icon: "Abc",
      selected: false,
      link: "s",
    },
  ],

  addNavItem: (item: IItem) =>
    set((state) => {
      return {
        items: [...state.items, item],
      };
    }),

  init: (item: IItem[]) =>
    set(() => {
      return {
        items: [...item],
      };
    }),
  getNavItems: () => get().items,
  toggleSelection: (idx: number) => {
    set((state) => {
      // console.log("info state before", state.selected);
      // console.log("info state item before", state.items[idx].selected);

      if (state.selected == false && state.items[idx].selected == false) {
        state.selected = true;
        state.items[idx].selected = true;
      } else if (state.selected == true && state.items[idx].selected == true) {
        state.selected = false;
        state.items[idx].selected = false;
      } else {
        state.items[idx].selected = false;
      }
      // console.log("info state after", state.selected);
      // console.log("info state item after", state.items[idx].selected);

      return { items: [...state.items], selected: state.selected };
    });
    return get().items[idx];
  },
}));
