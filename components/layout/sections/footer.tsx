import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="https://res.cloudinary.com/dwgsflt8h/image/upload/v1750161266/logo_isxw3s.png"
                alt="Logo"
                width={36}
                height={36}
                className="mr-2 rounded-lg border border-secondary"
              />

              <h3 className="text-2xl">Last Leaf Care</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Navigate</h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Home
              </Link>
            </div>

            <div>
              <Link href="#testimonial" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>

            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>
            <div>
              <Link href="#community" className="opacity-60 hover:opacity-100">
                Specialities
              </Link>
            </div>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Trigeminal Neulalgia
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Bell&apos;s palsy
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Diabetes mellitus
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Chronic Kidney Disease
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Gallstone
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Email
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            2025 &copy; Last Leaf Care. All Rights Reserved. Designed and Developed By :
            <Link
              target="_blank"
              href="https://github.com/ku28"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Kushagra Juneja
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
