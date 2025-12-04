import type { Metadata } from "next";
import { SectionHeader, MotionWrapper } from "@/components/shared";
import { EventCard, events } from "@/features/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join YAD's upcoming events and discover our community activities, workshops, and networking opportunities.",
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.isUpcoming);
  const pastEvents = events.filter((e) => !e.isUpcoming);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Events"
          subtitle="Join us at our upcoming events and community activities"
        />

        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <MotionWrapper>
              <h2 className="font-heading text-2xl font-bold mb-8">
                Upcoming Events
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <MotionWrapper>
              <h2 className="font-heading text-2xl font-bold mb-8 text-muted-foreground">
                Past Events
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
