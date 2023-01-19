import { z } from "zod";
import { create } from "zustand";
import { Menus } from "../types";

export const useMenusStore = create<Menus>((set) => ({
    menus: [
        { index: 0, name: "Motorista", active: true },
        { index: 1, name: "Passageiro", url: '/rider' },
        { index: 1, name: "Sobre Passit", url: '/about' },
    ],
    activeMenu: (url?: string) =>
        set(state => ({ menus: state.menus.map(function (x) { x.url == url ? x.active = true : x.active = false; return x }) })
        )
}));