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
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
import styles from "@/components/shared/HomePage.module.css";
export function ContactForm() {
  return (
    <Card className={`w-full max-w-md mx-auto ${styles.contactForm}`}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription className="text-sm text-white">
          Fill out the form below to send us a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action="https://formsubmit.co/reeharamesh145@gmail.com"
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
            <Textarea
              name="message"
              id="message"
              placeholder="Want to hire me? Want to collaborate on a project? Interested in my services? Just send me a message and I'll get back to you."
              required
            />
          </div>
          <Button type="submit" className={styles.btn}>
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
