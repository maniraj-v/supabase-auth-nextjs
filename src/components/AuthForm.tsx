"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { CheckCircledIcon } from "@radix-ui/react-icons";

// Define the base schema
const baseSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

// Define the registration-specific schema
const registerSchema = baseSchema
  .extend({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Define the reset password-specific schema
const resetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Create a discriminated union type for the form types
type FormType =
  | { type: "login" }
  | { type: "register" }
  | { type: "resetPassword" };

// Helper function to get the correct schema based on form type
const getSchema = (formType: FormType["type"]) =>
  formType === "resetPassword"
    ? resetPasswordSchema
    : formType === "register"
    ? registerSchema
    : baseSchema; // login

type AuthFormProps = FormType & {
  action: (values: z.infer<ReturnType<typeof getSchema>>) => Promise<any>;
};

export default function AuthForm({ type, action }: AuthFormProps) {
  const schema = getSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const { isError, message } = await action(values);
    if (isError) {
      toast({
        title: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: (
          <p className="flex items-center gap-2 ">
            <CheckCircledIcon className="text-green-600 h-6 w-6" />
            <span className="text-gray-800">{"Login Success"}</span>
          </p>
        ),
      });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {type === "register" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        {(type === "register" || type === "login") && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-4",
            (type === "login" || type === "resetPassword") && "md:grid-cols-1"
          )}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {type === "resetPassword" && "New "}
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {(type === "register" || type === "resetPassword") && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="text-center">
          <Button type="submit" className="px-8">
            {type === "resetPassword"
              ? "Reset Password"
              : type === "register"
              ? "Sign Up"
              : "Sign In"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
