import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below to send us a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action="https://formsubmit.co/rohailramesh@hotmail.com"
          method="POST"
          target="_blank"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              name="message"
              type="text"
              placeholder="Your message"
              required
            />
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://artist-rr-portfolio.vercel.app/"
          />
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Send Message</Button>
      </CardFooter>
    </Card>
  );
}
