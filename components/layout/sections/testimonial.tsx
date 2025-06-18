"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  info: string;
  comment: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750162752/trigeminal-neuralgia-2202_cnz7ri.jpg",
    name: "Trigeminal Neulalgia (TN) Treatment",
    userName: `"No more shocks to bear"`,
    info: "As indicated by Lambru G, et al. Practical Neurology 2021;21:392-402.",
    comment:
      "Trigeminal neuralgia (TN) is characterised by recurrent, unilateral, brief (<1 s-2 min), very painful, electric shock-like pain...",
  },
  {
    image: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750163029/physiotherapy-for-bells-palsy-calgary-nw_yjk4h3.jpg",
    name: "Bell's palsy Treatment",
    userName: `"Move with your intact expressions"`,
    info: "As evident in Eviston TJ, et al. Journal of Neurology, Neurosurgery and Psychiatry 2015;86:1356-1361.",
    comment:
      "Bell's palsy is a common cranial neuropathy causing acute unilateral lower motor neuron facial paralysis. Immune, infective and...",
  },
  {
    image: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750163377/type-1-diabetes-treatment-and-diagnosis_bsic0x.jpg",
    name: "Diabetes mellitus (DM) Treatment",
    userName: `"See off your sweet poison forever"`,
    info: "As per Diabetes mellitus Article • December 2014",
    comment:
      "Diabetes mellitus (DM) also known as simply diabetes, is a group of metabolic diseases in which there are high blood sugar...",
  },
  {
    image: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750163542/chronic-kidney-disease-2_hbberl.jpg",
    name: "Chronic Kidney Disease Treatment",
    userName: `"Say Bye to Dialysis"`,
    info: "According to Advances in Therapy (2022) 39:193-220",
    comment:
      "Chronic Kidney Disease CKD is diagnosed when the estimated glomerular filtration rate (eGFR) declines below 60 mL/min/1.73 m2...",
  },
  {
    image: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750163839/1696835903Understanding-Gallstones-and-Treatments-scaled_rumofu.webp",
    name: "Gallstone Treatment",
    userName: `"Get rid of stones in the way to digestion"`,
    info: "As mentioned in Nigerian Journal of Surgery Jul-Dec 2013 | Volume 19 | Issue 2",
    comment:
      "Gallstones or choleliths are hardened deposits of the digestive fluid bile, that can form within the gallbladder. They...",
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Services
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear Are Some Examples
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardHeader>
                  <div className="flex gap-1 pb-2">
                    <Image
                      src={review.image}
                      alt="services"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="mt-2">{review.userName}</CardDescription>
                      <CardDescription className="mt-2">{review.info}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  {`${review.comment}`}
                <Button variant="ghost" className="mt-4">
                  <Link href="/services"> Read More</Link>
                </Button>
                </CardContent>

              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
