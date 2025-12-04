"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { USER } from "@/config/user";
import { useIsClient } from "@/hooks/useIsClient";
import { decodeEmail } from "@/utils/string";

const contactFormSchema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(5, "Please provide your email or phone"),
  message: z.string().min(50, "Message must be at least 50 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(USER.email);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "",
      name: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    if (!isClient) return;

    const { subject, name, contact, message } = data;
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\n\n${message}`
    );
    const mailtoLink = `mailto:${emailDecoded}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs text-muted-foreground">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject"
                  className="border-edge bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Give a short, clear title so I know what your message is about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs text-muted-foreground">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border-edge bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your full name so I know who’s reaching out.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs text-muted-foreground">
                Contact Info
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Email or phone"
                  className="border-edge bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a way I can reach you back, like your email or phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-xs text-muted-foreground">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="border-edge bg-background"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Share details, questions, or any info you want me to know.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-foreground text-background hover:bg-primary transition-all duration-300"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
