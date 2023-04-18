export interface UserProfile {
  id: string;
  name: string;
  image_url: string;
  title: string;
  description: string;
  portfolio: string;
  user_id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;
}
