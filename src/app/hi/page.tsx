import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCategoryCard } from "@/components/service-category-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
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
  { name: "प्लम्बर", icon: Wrench },
  { name: "इलेक्ट्रीशियन", icon: Zap },
  { name: "बढ़ई", icon: Hammer },
  { name: "दर्जी", icon: Scissors },
  { name: "मजदूर", icon: HardHat },
  { name: "पेंटर", icon: Paintbrush },
];

const featuredWorkers: WorkerProfile[] = [
  {
    id: 1,
    name: "राजेश कुमार",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait",
    service: "इलेक्ट्रीशियन",
    rating: 4.8,
    reviews: 125,
    skills: ["वायरिंग", "पंखा लगाना", "उपकरण मरम्मत"],
    languages: ["हिंदी", "अंग्रेज़ी"],
    available: true,
  },
  {
    id: 2,
    name: "सुनीता शर्मा",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait",
    service: "दर्जी",
    rating: 4.9,
    reviews: 210,
    skills: ["ब्लाउज बनाना", "ऑल्टरेशन", "कढ़ाई"],
    languages: ["मराठी", "हिंदी"],
    available: true,
  },
  {
    id: 3,
    name: "अनिल पटेल",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "male portrait",
    service: "प्लम्बर",
    rating: 4.7,
    reviews: 98,
    skills: ["लीक मरम्मत", "पाइप फिटिंग", "नाली की सफाई"],
    languages: ["हिंदी"],
    available: false,
  },
  {
    id: 4,
    name: "विक्रम सिंह",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man face",
    service: "बढ़ई",
    rating: 4.8,
    reviews: 150,
    skills: ["फर्नीचर बनाना", "दरवाजा लगाना", "पॉलिशिंग"],
    languages: ["हिंदी", "अंग्रेज़ी"],
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
              विश्वसनीय मदद, बस एक टैप दूर।
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              आपके घर की सभी सेवाओं की जरूरतों के लिए आपको कुशल स्थानीय पेशेवरों से जोड़ना। अपने क्षेत्र में तुरंत विश्वसनीय कर्मचारी खोजें।
            </p>
            <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="सेवा (उदा., प्लम्बर)"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="स्थान (पिन कोड)"
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button size="lg" className="h-12 text-base font-bold w-full">
                  खोजें
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              हमारी सेवाएं एक्सप्लोर करें
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
              टॉप-रेटेड पेशेवर
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredWorkers.map((worker) => (
                <Card key={worker.id} className="flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={worker.avatarUrl}
                      alt={`Profile of ${worker.name}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                      data-ai-hint={worker.dataAiHint}
                    />
                    {worker.available && (
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white border-green-500">
                        उपलब्ध
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-sm text-primary font-semibold mb-1">{worker.service}</p>
                    <CardTitle className="text-xl font-headline mb-2">{worker.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-foreground">{worker.rating.toFixed(1)}</span>
                      </div>
                      <span>({worker.reviews} समीक्षाएं)</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {worker.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-card">
                    <Button className="w-full">प्रोफ़ाइल देखें</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                सभी पेशेवर देखें
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
