import type { LucideIcon } from "lucide-react";

export type ServiceCategory = {
  name: string;
  icon: LucideIcon;
};

export type WorkerProfile = {
  id: number;
  name: string;
  avatarUrl: string;
  dataAiHint: string;
  service: string;
  rating: number;
  reviews: number;
  skills: string[];
  languages: string[];
  available: boolean;
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};
