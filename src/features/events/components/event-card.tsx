"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, Badge, Button } from "@/components/ui";
import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Calendar className="h-16 w-16 text-primary/20" />
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant={event.isUpcoming ? "default" : "secondary"}>
              {event.isUpcoming ? "Upcoming" : "Past Event"}
            </Badge>
          </div>
        </div>
        <CardContent className="pt-6">
          <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-3">
            {event.description}
          </p>
        </CardContent>
        {event.isUpcoming && event.registrationLink && (
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={event.registrationLink}>
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
