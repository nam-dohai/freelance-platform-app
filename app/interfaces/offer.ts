export interface Offer {
  id: string;
  project_id: string;
  proponent_id: string;
  message: string;
  price: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;
}
