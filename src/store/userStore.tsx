import { Subscription } from '@/types/subscription';
import { User } from '@/types/user';
import { create } from 'zustand'

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;

  subscription: Subscription | null;
  setSubscription: (subscription: Subscription) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),

  subscription: null,
  setSubscription: (subscription) => set(() => ({ subscription })),
}));
