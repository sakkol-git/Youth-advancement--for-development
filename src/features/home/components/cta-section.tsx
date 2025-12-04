"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/90 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex p-3 rounded-full bg-white/10 mb-6">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Your support can help transform the lives of young Cambodians. Whether
            through donations, volunteering, or spreading the word, every action
            counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/programs">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
