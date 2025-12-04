"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { Card, CardContent, Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import type { TeamMember } from "@/types";

interface TeamGridProps {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export function TeamGrid({ title, subtitle, members }: TeamGridProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
