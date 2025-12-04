import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home, Laptop, Users, Check } from "lucide-react";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { MotionWrapper, SectionHeader } from "@/components/shared";
import { CTASection } from "@/features/home";
import { programs } from "@/features/programs";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

const iconMap = {
  Home,
  Laptop,
  Users,
};

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const Icon = iconMap[program.icon as keyof typeof iconMap] || Users;

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper>
              <Badge className="mb-4">{program.shortTitle}</Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {program.description}
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/donate">Support This Program</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/partners">Become a Partner</Link>
                </Button>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </MotionWrapper>
          </div>

          <div className="mt-20">
            <SectionHeader
              title="Program Details"
              subtitle="Learn more about what this program offers"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <MotionWrapper>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {program.longDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold mb-6">
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
