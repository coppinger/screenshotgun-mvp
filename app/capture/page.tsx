"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import Header from "@/components/app/Header";

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
import { MobileFooter } from "@/components/app/MobileMenu";

const captureSchema = z.object({
  url: z.string().url(),
});

export default function Capture() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof captureSchema>>({
    resolver: zodResolver(captureSchema),
    defaultValues: {
      url: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof captureSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Header />
      <main className="flex h-full flex-col items-center justify-center gap-2 border-y px-6 text-center">
        <p className="lead">Capture a screenshot</p>
        <p className="text-muted-foreground">
          Enter the URL of the page you’d like to capture
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="username"
              className="w-full"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex w-full flex-col gap-2">
                    <FormControl>
                      <Input
                        placeholder="https://google.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button variant={"outline"}>Advanced options</Button>
      </main>
      <MobileFooter />
    </div>
  );
}
