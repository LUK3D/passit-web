import { create } from "zustand";

export const useSignUpDialogStore = create<{isOpen:boolean, toggle:Function}>((set) => ({
    isOpen:false ,
    toggle: () =>
        set(state => ({ isOpen:!state.isOpen })
        )
}));