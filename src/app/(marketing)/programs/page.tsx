import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Laptop, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "@/components/ui";
import { SectionHeader, MotionWrapper } from "@/components/shared";
import { programs } from "@/features/programs";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Discover YAD's transformative programs empowering Cambodian youth through education, digital literacy, and community development.",
};

const iconMap = {
  Home,
  Laptop,
  Users,
};

export default function ProgramsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Programs"
          subtitle="Transformative initiatives designed to empower Cambodian youth and communities"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon as keyof typeof iconMap] || Users;

            return (
              <MotionWrapper key={program.id} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge className="absolute top-4 left-4">{program.shortTitle}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-4">
                      <Link href={`/programs/${program.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
