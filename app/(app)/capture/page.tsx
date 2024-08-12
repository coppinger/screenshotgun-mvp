"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Camera } from "@phosphor-icons/react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Zod schema for capture form

const captureSchema = z.object({
  url: z.string().url(),
});

export default function Capture() {
  // State for advanced options
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

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
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="lead">Capture a screenshot</p>
        <p className="text-muted-foreground">
          Enter the URL of the page you’d like to capture
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="mx-auto flex max-w-md gap-2">
                  <FormControl>
                    <Input
                      placeholder="https://google.com"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <Button type="submit" className="flex items-center gap-2">
                    <Camera />
                    Capture
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex items-center space-x-2">
        <Switch
          id="advanced-options"
          checked={showAdvancedOptions}
          onCheckedChange={(checked) => setShowAdvancedOptions(checked)}
        />
        <Label htmlFor="advanced-options">Advanced options</Label>
      </div>
      {showAdvancedOptions && <p>Advanced options go here!</p>}
    </div>
  );
}
