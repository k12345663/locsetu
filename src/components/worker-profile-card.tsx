import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";
import type { WorkerProfile } from "@/lib/types";

export function WorkerProfileCard({ name, avatarUrl, dataAiHint, service, rating, reviews, languages, available }: WorkerProfile) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <Image
          src={avatarUrl}
          alt={`Profile of ${name}`}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          data-ai-hint={dataAiHint}
        />
        {available && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white border-green-500">
            Available
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-primary font-semibold mb-1">{service}</p>
        <CardTitle className="text-xl font-headline mb-2">{name}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-foreground">{rating.toFixed(1)}</span>
          </div>
          <span>({reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <Badge key={lang} variant="secondary">{lang}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-card">
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
}
