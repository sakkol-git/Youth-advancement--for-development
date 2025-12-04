import type { Metadata } from "next";
import { Heart, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { SectionHeader, MotionWrapper } from "@/components/shared";
import { DonationForm } from "@/features/donate";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support YAD's mission to empower Cambodian youth through education and community development.",
};

export default function DonatePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Support Our Mission"
          subtitle="Your donation helps transform the lives of young Cambodians through education and opportunity"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <MotionWrapper delay={0}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Make an Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Every dollar directly supports education and youth development
                  programs
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Trusted</h3>
                <p className="text-sm text-muted-foreground">
                  Your information is protected with industry-standard encryption
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Options</h3>
                <p className="text-sm text-muted-foreground">
                  One-time or recurring donations with multiple payment methods
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>

        <div className="max-w-2xl mx-auto">
          <MotionWrapper>
            <DonationForm />
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
