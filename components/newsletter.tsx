import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <Card className="mt-20">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold">
          Subscribe Newsletter
        </h2>

        <p className="mt-2 text-muted-foreground">
          Get the latest blog updates.
        </p>

        <div className="flex gap-4 mt-6">
          <Input
            placeholder="Enter email"
          />

          <Button>
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}