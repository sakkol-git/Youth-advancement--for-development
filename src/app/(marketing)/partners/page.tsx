import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { SectionHeader, MotionWrapper } from "@/components/shared";
import { PartnerGrid } from "@/features/partners";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet the organizations and individuals supporting YAD's mission to empower Cambodian youth.",
};

export default function PartnersPage() {
  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Partners & Supporters"
            subtitle="We are grateful for the support of organizations and individuals who believe in our mission"
          />
        </div>
      </div>

      <PartnerGrid />

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-muted-foreground mb-8">
              Join us in making a lasting impact on the lives of Cambodian youth.
              We offer various partnership opportunities tailored to your goals
              and capacity.
            </p>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
                  <div>
                    <h3 className="font-semibold mb-2">Financial Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Fund scholarships, programs, or infrastructure development
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">In-Kind Donations</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide equipment, resources, or services
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Volunteer Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Share your skills through mentorship or training
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/donate">
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:yad2025@edu.kh">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
