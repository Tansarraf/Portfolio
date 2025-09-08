import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { achievements } from "@/constants";

const firstRow = achievements.slice(0, achievements.length / 2);
const secondRow = achievements.slice(achievements.length / 2);

const ReviewCard = ({ name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function Achievements() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
  <h2 className="text-heading">My Achievements</h2>

  <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] mt-12 overflow-hidden">
    <Marquee pauseOnHover className="[--duration:20s]">
      {firstRow.map((achievement) => (
        <ReviewCard key={achievement.id} {...achievement} />
      ))}
    </Marquee>
    <Marquee reverse pauseOnHover className="[--duration:20s]">
      {secondRow.map((achievement) => (
        <ReviewCard key={achievement.id} {...achievement} />
      ))}
    </Marquee>

    <div className="absolute inset-y-0 left-0 w-1/6 pointer-events-none bg-gradient-to-r from-primary"></div>
    <div className="absolute inset-y-0 right-0 w-1/6 pointer-events-none bg-gradient-to-l from-primary"></div>
  </div>
</div>

  );
}