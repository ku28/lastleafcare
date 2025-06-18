import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import { Marquee } from "@devnomic/marquee";
import Image from "next/image";
interface TeamProps {
  imageUrl: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164667/a2_nuuwo0.png",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164667/g4_bfky46.png",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_v6ic6r.png",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a1_u4i3jx.png",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
    },
  ];

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Achievement
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Our Achievements
        </h2>
      </div>

      <div className="mx-width">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {teamList.map(
            (
              { imageUrl },
              index
            ) => (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
              >
                <CardHeader className="p-0 gap-0">
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt="achievement"
                      width={300}
                      height={300}
                    />
                  </div>
                </CardHeader>
              </Card>
            )
          )}
        </Marquee>
      </div>
    </section>
  );
};
