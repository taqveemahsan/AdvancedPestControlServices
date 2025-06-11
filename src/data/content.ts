import { Shield, FileWarning, Clock, Bug, Rat } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    title: "Licensed Technicians",
    description:
      "Our professional technicians are fully licensed, insured, and trained in the latest pest control methods.",
    icon: Shield,
  },
  {
    title: "One-Year Written Warranty",
    description:
      "We stand behind our work with comprehensive warranties on our pest control treatments.",
    icon: FileWarning,
  },
  {
    title: "24/7 Emergency Support",
    description:
      "Pest problems don't wait for business hours. Neither do we. Emergency services available.",
    icon: Clock,
  },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HOME_SERVICES: Service[] = [
  {
    title: "Bed Bug Control",
    description:
      "Advanced treatment methods including steam, Aprehend, and heat treatments for complete bed bug elimination.",
    icon: Bug,
  },
  {
    title: "Cockroach Treatment",
    description:
      "Effective ULV fogging and gel baiting techniques to eradicate cockroach infestations.",
    icon: Bug,
  },
  {
    title: "Rodent & Mice Control",
    description:
      "Comprehensive rodent control strategies including trapping, exclusion, and prevention.",
    icon: Rat,
  },
];
