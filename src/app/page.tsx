import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCategoryCard } from "@/components/service-category-card";
import { WorkerProfileCard } from "@/components/worker-profile-card";
import Chatbot from "@/components/chatbot";
import type { ServiceCategory, WorkerProfile } from "@/lib/types";
import {
  Wrench,
  Zap,
  Hammer,
  Scissors,
  HardHat,
  Paintbrush,
  MapPin,
  Search,
} from "lucide-react";

const serviceCategories: ServiceCategory[] = [
  { name: "Plumber", icon: Wrench },
  { name: "Electrician", icon: Zap },
  { name: "Carpenter", icon: Hammer },
  { name: "Tailor", icon: Scissors },
  { name: "Labourer", icon: HardHat },
  { name: "Painter", icon: Paintbrush },
];

const featuredWorkers: WorkerProfile[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait",
    service: "Electrician",
    rating: 4.8,
    reviews: 125,
    skills: ["Wiring", "Fan Installation", "Appliance Repair"],
    languages: ["Hindi", "English"],
    available: true,
  },
  {
    id: 2,
    name: "Sunita Sharma",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait",
    service: "Tailor",
    rating: 4.9,
    reviews: 210,
    skills: ["Blouse Making", "Alterations", "Embroidery"],
    languages: ["Marathi", "Hindi"],
    available: true,
  },
  {
    id: 3,
    name: "Anil Patel",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "male portrait",
    service: "Plumber",
    rating: 4.7,
    reviews: 98,
    skills: ["Leak Repair", "Pipe Fitting", "Drain Cleaning"],
    languages: ["Hindi"],
    available: false,
  },
  {
    id: 4,
    name: "Vikram Singh",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man face",
    service: "Carpenter",
    rating: 4.8,
    reviews: 150,
    skills: ["Furniture Making", "Door Installation", "Polishing"],
    languages: ["Hindi", "English"],
    available: true,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 -z-10"></div>
          <div
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow-1"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow-2"
            aria-hidden="true"
          ></div>

          <div className="container mx-auto px-4 z-10">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Trusted Help, Just a Tap Away.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connecting you with skilled local professionals for all your home
              service needs. Find reliable workers in your area instantly.
            </p>
            <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Service (e.g., Plumber)"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Location (PIN Code)"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button size="lg" className="h-12 text-base font-bold w-full">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Explore Our Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {serviceCategories.map((category) => (
                <ServiceCategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section id="workers" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Top-Rated Professionals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredWorkers.map((worker) => (
                <WorkerProfileCard key={worker.id} {...worker} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                View All Professionals
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
