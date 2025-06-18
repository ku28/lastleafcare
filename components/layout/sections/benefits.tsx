import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "HeartHandshake",
    title: "Consulatation",
    description:
      "Get a free consultation from LAST LEAF CARE Electrohomeopathy Centre to understand and analyze issues regarding your health.",
  },
  {
    icon: "HeartPulse",
    title: "Diagnosis",
    description:
      "At LAST LEAF CARE Electrohomeopathy Centre we try to differentiate the common symptoms of the disease and performs in-depth analysis for peculiar, uncommon characteristics.",
  },
  {
    icon: "HandHeart",
    title: "Treatment",
    description:
      "LAST LEAF CARE Electrohomeopathy Centre helps to provide a customized Electrohomeopathic treatment plan and diet charts for more accurate outcomes.",
  },
  {
    icon: "CalendarHeart",
    title: "Enquire Now",
    description:
      "Request Appointment Repeat the Medicine. Enquire Now.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Trust Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            LAST LEAF CARE Electrohomeopathy Centre is expertise in the medicinal world; 
            it is one of the top growing Electrohomeopathy Centres in India; we have helped 
            numerous patients from all over periphery & abroad as well with Electrohomeopathic 
            treatment in our Electrohomeopathy Centre. And treated their chronic disorder without 
            any side effects from their root cause. Electrohomeopathic treatment is very safe, and 
            their medicines contain natural and herbal substances. We don’t prescribe generic medication 
            to our patients. Instead, provide the best Electrohomeopathic-based treatment with a proper 
            guidance and a well-researched diet according to disease that can help patients. And also 
            provides some facilities that cure patients physically and psychologically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
