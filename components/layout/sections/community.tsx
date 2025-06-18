import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary " />
      <div className="container py-20 sm:py-20">
        <div className="lg:w mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div className="text-center">
                  <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    Specialities
                  </h2>

                  <h2 className="text-3xl md:text-4xl text-center font-bold">
                    Our Specialities
                  </h2>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w text-xl text-primary">
              LAST LEAF CARE Electrohomeopathy Centre is one of the most prominent Electrohomeopathic Centres in area.
              Since 1965 Electohomeopathy has treated patients with well-experienced expertise and advanced Electrohomeopathic Methodology.
              We are offering our services to patients help them in the treatment of Kidney Diseases
              (like Chronic Kidney Disease, UTI, Diabetic Kidney Disease, Nephrotic syndrome, Renal cyst, Renal stone etc.),
              Neuralgias ( Trigeminal neuralgia, Glossopharyngeal neuralgia, Bell’s Palsy etc.), Diabetes and other chronic diseases.
              This Electrohomeopathy Centre runs by doctor aiming to provide help for the best treatment to patients. In our Electrohomeopathy Centre,
              we provide help for customized treatment for each patient and follow up on their health conditions that can help cure them permanently.
              As a result, It is the only Electrohomeopathy Centre in Area that has built a reputation for its practical impact and evidence-based
              Electrohomeopathic Treatment guidance.
            </CardContent>

            <CardFooter className="text-muted-foreground">
              “Drugs are not always necessary. Belief in recovery always is.” - Norman Cousins
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
