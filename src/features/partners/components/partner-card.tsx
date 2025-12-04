"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2 } from "lucide-react";
import { Card, CardContent, Badge } from "@/components/ui";
import type { Partner } from "@/types";

interface PartnerCardProps {
  partner: Partner;
  index?: number;
}

const tierColors = {
  platinum: "bg-gradient-to-br from-slate-200 to-slate-300 text-slate-800",
  gold: "bg-gradient-to-br from-yellow-200 to-amber-300 text-amber-900",
  silver: "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800",
  bronze: "bg-gradient-to-br from-orange-200 to-amber-300 text-amber-900",
};

export function PartnerCard({ partner, index = 0 }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow group">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-muted">
              <Building2 className="h-8 w-8 text-muted-foreground" />
            </div>
            <Badge className={tierColors[partner.tier]}>
              {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
            </Badge>
          </div>
          <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {partner.name}
          </h3>
          {partner.description && (
            <p className="text-sm text-muted-foreground mb-4">
              {partner.description}
            </p>
          )}
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit Website
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
