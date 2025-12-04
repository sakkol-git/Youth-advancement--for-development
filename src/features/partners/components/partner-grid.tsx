"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { PartnerCard } from "./partner-card";
import { partners, partnershipTiers } from "../data";

export function PartnerGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Partners"
          subtitle="We are grateful for the support of our incredible partners"
        />

        {partnershipTiers.map((tierInfo) => {
          const tierPartners = partners.filter((p) => p.tier === tierInfo.tier);
          if (tierPartners.length === 0) return null;

          return (
            <div key={tierInfo.tier} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {tierInfo.title}
                </h3>
                <p className="text-muted-foreground">{tierInfo.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierPartners.map((partner, index) => (
                  <PartnerCard key={partner.id} partner={partner} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
