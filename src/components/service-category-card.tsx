import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/lib/types";

export function ServiceCategoryCard({ name, icon: Icon }: ServiceCategory) {
  return (
    <Link href="#" className="group block">
      <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-primary">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
          <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors group-hover:bg-primary/20">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-headline font-semibold text-base text-foreground">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
