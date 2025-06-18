"use client";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  PhoneNumber: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  message: z.string(),
});

export const BookingSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      PhoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, PhoneNumber, message } = values;
    console.log(values);
    const formattedMessage = `Hello, I am ${firstName} ${lastName}%0A%0A` +
      `My Email: ${email}%0A` +
      `My Phone: ${PhoneNumber}%0A%0A` +
      `Message: ${message}`;

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
    window.open(whatsappLink, '_blank');
  }

  return (
    <section id="booking" className="py-2">
        <div>
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl text-center mb-8 font-bold">Book Your Appointment</h2>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
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
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="PhoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Mobile No."
                            maxLength={10}
                            pattern="[0-9]*"
                            inputMode="numeric"
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">Book Appointment</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
    </section>
  );
};
