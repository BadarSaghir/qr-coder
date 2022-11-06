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
      link: "/?selected=url",
      selected: false,
      icon: <LinkIcon />,
      query: { parameter: "selected", value: "url" },
    },
    {
      link: "/?selected=event",
      selected: false,
      icon: <CalendarIcon />,
      query: { parameter: "selected", value: "event" },
    },
    {
      link: "/?selected=email",
      selected: false,
      icon: <EnvelopeOpenIcon />,
      query: { parameter: "selected", value: "email" },
    },
    {
      link: "/?selected=text",
      selected: true,
      icon: <QrCodeIcon />,
      query: { parameter: "selected", value: "text" },
    },
    {
      icon: <LockClosedIcon />,
      selected: false,
      link: "/?selected=encryptedMessage",
      query: { parameter: "selected", value: "encryptedMessage" },
    },
    {
      icon: <FolderIcon />,
      selected: false,
      link: "/?selected=files",
      query: { parameter: "selected", value: "files" },
    },
    {
      icon: <LockOpenIcon />,
      selected: false,
      link: "/?selected=decryptedMsg",
      query: { parameter: "selected", value: "decryptedMsg" },
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
        state.items[3].selected = false;
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
