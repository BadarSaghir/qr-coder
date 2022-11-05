import create from "zustand";
import { IItem } from "../elements";
import {
  LinkIcon,
  CalendarIcon,
  FolderIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  LockOpenIcon,
  LockClosedIcon,
  PencilIcon,
  QrCodeIcon,
} from "@heroicons/react/24/solid";

export const useNavStore = create<{
  items: IItem[];
  selected: boolean;
  idxSelected: number;
  addNavItem: (item: IItem) => void;
  getNavItems: () => IItem[];
  init: (item: IItem[]) => void;
  toggleSelection: (idx: number) => IItem;
}>((set, get) => ({
  idxSelected: -1,
  selected: false,
  items: [
    {
      link: "/url",
      selected: false,
      icon: <LinkIcon />,
    },
    {
      link: "/event",
      selected: false,
      icon: <CalendarIcon />,
    },
    {
      link: "/text",
      selected: false,
      icon: <QrCodeIcon />,
    },
    {
      link: "/email",
      selected: false,
      icon: <EnvelopeOpenIcon />,
    },
    {
      icon: <LockClosedIcon />,
      selected: false,
      link: "/encryptedMessage",
    },
    {
      icon: <FolderIcon />,
      selected: false,
      link: "/files",
    },
    {
      icon: <LockOpenIcon />,
      selected: false,
      link: "/decryptedMsg",
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

      if (state.idxSelected == -1) {
        state.idxSelected = idx;
        state.items[idx].selected = true;
      } else {
        state.items[state.idxSelected].selected = false;
        state.items[idx].selected = true;
        state.idxSelected = idx;
      }
      // console.log("info state after", state.selected);
      // console.log("info state item after", state.items[idx].selected);

      return {
        items: [...state.items],
        selected: state.selected,
        idxSelected: idx,
      };
    });
    return get().items[idx];
  },
}));
