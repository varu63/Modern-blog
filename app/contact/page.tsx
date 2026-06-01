import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto mb-50 mt-50" >

      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <form className="space-y-4">

        <Input placeholder="Name" />

        <Input
          type="email"
          placeholder="Email"
        />

        <Textarea
          placeholder="Message"
        />

        <Button>
          Send Message
        </Button>

      </form>
    </div>
  );
}