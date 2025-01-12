import { create } from "zustand";

const useAuthStore = create((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  reset: () => set({ email: "", password: "", confirmPassword: "" }),
}));

export default useAuthStore;
