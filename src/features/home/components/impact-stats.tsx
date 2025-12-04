"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/shared";
import { impactStats } from "@/features/home/data";

const iconMap = {
  Users,
  CheckCircle,
  Award,
};

export function ImpactStats() {
  return (
    <section className="relative -mt-20 z-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactStats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            const isMiddle = index === 1;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-xl backdrop-blur-md shadow-lg ${
                  isMiddle
                    ? "bg-card/90 border"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isMiddle ? "bg-primary text-primary-foreground" : "bg-white/20"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        isMiddle ? "text-muted-foreground" : "text-white/80"
                      }`}
                    >
                      {stat.label}
                    </p>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className={`text-3xl font-bold ${
                        isMiddle ? "text-foreground" : ""
                      }`}
                    />
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
