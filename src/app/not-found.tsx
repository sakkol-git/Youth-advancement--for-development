"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex p-4 rounded-full bg-muted mb-6">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="font-heading text-6xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
