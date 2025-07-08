import { UserDTO } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  user: UserDTO | null;
  setUser: (user: UserDTO) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: "zustand-user-store",
      }
    )
  );