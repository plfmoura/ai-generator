export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
  createdAt: Date;
  isActive: boolean;
}
