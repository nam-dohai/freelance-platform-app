export interface Proposition {
  id: string;
  project_id: string;
  proponent_id: string;
  message: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;
}
