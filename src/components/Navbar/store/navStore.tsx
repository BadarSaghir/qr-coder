import create from "zustand";
import { IItem } from "../elements";

export const useNavStore = create<{
  items: IItem[];

  addNavItem: (item: IItem) => void;
  getNavItems: () => IItem[];
  init: (item: IItem[]) => void;
  toggleSelection: (idx: number) => IItem;
}>((set, get) => ({
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
      state.items[idx].selected = state.items[idx].selected ? false : true;
      return { items: [...state.items] };
    });
    return get().items[idx];
  },
}));
