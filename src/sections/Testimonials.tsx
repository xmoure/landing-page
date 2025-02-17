import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const textLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo aut maiores ut quo iure quidem, nostrum exercitationem id sapiente facere ea nisi mollitia nam alias illo! Quasi, earum laboriosam?"

const testimonials = [
  {
    name: "Juan Lopez",
    position: "CTO/CPO @ CompanyWow",
    text: textLorem,
    avatar: memojiAvatar1,
  },
  {
    name: "Olive White",
    position: "Marketing specialist @ UnderLIve",
    text: textLorem,
    avatar: memojiAvatar2,
  },
  {
    name: "John Doe",
    position: "CEO @ Innovative",
    text: textLorem,
    avatar: memojiAvatar3,
  },
  {
    name: "Marta Stw",
    position: "Product Manager @ GlobalDev",
    text: textLorem,
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ Minions",
    text: textLorem,
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = ({ id }: { id?: string }) => {
  return (
    <div className="py-16 lg:py-24" id={id}>
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Our Clients Say"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem modi facere rerum iusto illum asperiores reprehenderit cumque quas rem vero soluta, vel iste officiis suscipit? Incidunt asperiores harum corrupti cumque."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%, transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
