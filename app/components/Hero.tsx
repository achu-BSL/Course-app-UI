import { hero } from "@/public";
import { Button } from "@nextui-org/button";

export default function Hero() {
  return (
    <div className="flex justify-center lg:px-8 md:px-6 px-4">
      <div className="flex w-full max-w-[1280px] py-16">
        <img className="absolute sm:relative w-[240px] md:w-[300px]" src={hero.src} />
        <div className="max-w-[340px] ring-1 sm:ring-0 ring-white/40 p-8 sm:p-0 sm:m-8  bg-white/30 backdrop-blur-sm ">
          <h1 className="text-2xl xs:text-4xl sm:text-2xl md:text-4xl break-words font-semibold">
            For every student, every classroom,{" "}
            <span className="underline underline-offset-4 decoration-gray-400">
              Real result
            </span>
          </h1>
          <p className="xs:text-lg sm:text-medium md:text-lg py-4">
            We're a nonprofit with the mission to provide a free, world-class
            education for anyone, anywhere.
          </p>

          <Button color="primary">Start here</Button>
        </div>
      </div>
    </div>
  );
}
