import { Offer } from "./offer";
import { ProjectCategory } from "./projectCategory";
import { Proposition } from "./proposition";
import { UserProfile } from "./userProfile";

export interface Project {  
  id: string;
  name: string;
  description: string;
  price: string;
  author_id: string;
  worker_id: string | null;
  status: string;
  author: UserProfile
  worker: UserProfile,
  propositions: Array<Proposition>,
  offers: Array<Offer>,
  project_categories: Array<ProjectCategory>
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;
}