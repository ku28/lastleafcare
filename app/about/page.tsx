import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section id="about" className="py-12">
      <hr className="border-secondary " />
      <div className="container py-20 sm:py-20">
        <div className="lg:w mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl text-center font-bold">
                    About Us
                  </h2>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w text-xl text-primary">
              LAST LEAF CARE is a leading Electrohomeopathic treatment centre all over the country. Doctors use Electrohomeopathic
              Treatment to cure the acute & chronic diseases since 1965. Electrohomeopathy have served numerous patients with chronic
              conditions with the help of natural substances and herbs/shurbs without any side effects. LAST LEAF CARE Electrohomeopathy
              Centre gives you all forms of assurance for safe and effective treatment help. We have a team of experienced and well-equipped
              doctors at our back (E.D.M.A.) who help maintain a healthy lifestyle with proper guidance and well-researched diet chart as per
              patient&apos;s requirements. Our therapies focus more on patient&apos;s comfort to help them treat well both physically and psychologically.
              LAST LEAF CARE Electrohomeopathy Centre provide expertise consultation and customized treatment help by understanding your health
              issues and help to cure them naturally with Electrohomeopathic remedies.
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
