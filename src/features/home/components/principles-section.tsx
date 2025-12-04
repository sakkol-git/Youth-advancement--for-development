"use client";

import { motion } from "framer-motion";
import { Feather, Compass, Heart, Gem, Flag } from "lucide-react";
import { SectionHeader } from "@/components/shared";
import { principles, coreValues } from "@/features/home/data";

const iconMap = {
  Feather,
  Compass,
  HandHeart: Heart,
  Gem,
  Flag,
};

export function PrinciplesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Principles"
          subtitle="The values and vision that guide our mission"
        />

        <div className="space-y-24">
          {principles.map((principle, index) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap] || Feather;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>

                  {principle.id === "core-values" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {coreValues.map((value) => (
                        <div
                          key={value.title}
                          className="p-3 rounded-lg border bg-card/50"
                        >
                          <h4 className="font-semibold text-primary">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
