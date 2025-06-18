import {
    Card,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
interface TeamProps {
    imageUrl: string;
}

export default function GalleryPage() {
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
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
        {
            imageUrl:
                "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750164666/a3_1_ebo8df.png",
        },
    ];

    return (
        <section id="team" className="container lg:w py-12 sm:py-32">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl text-center font-bold">
                    Our Gallery
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                                        className="w-full aspect-square object-cover transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                                    />
                                </div>
                            </CardHeader>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
