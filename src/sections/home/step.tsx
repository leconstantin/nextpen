import Box from "@/components/other/box";
import Image from "next/image";
import { PiPlay } from "react-icons/pi";

export default function Step() {
  return (
    <section>
      <div className="relative flex flex-col items-start justify-center bg-white">
        <div className="relative flex flex-col w-full max-w-7xl pt-20 px-5 pb-24">
          <div className="flex flex-col justify-start">
            <div>
              <h2 className="max-w-4xl relative mx-auto">
                <div className="absolute max-w-[30%] left-8 -top-6 object-cover">
                  <Image
                    src="/steph.webp"
                    alt="back"
                    width={279}
                    height={135}
                    className="object-contain"
                  />
                </div>
                <div className="text-[#151035] text-5xl font-bold text-center relative">
                  Goodbye &quot;lost in translation&quot; and hand-off drama{" "}
                </div>
              </h2>
            </div>
            <div className="mt-4 mb-6 pt-8 pb-2 flex items-center justify-center">
              <div className="text-[rgba(28,32,34,0.88)] font-medium text-center text-3xl">
                When designers and developers use different tools,
              </div>
            </div>

            <div className="relative mt-4 ml-14 mr-14 flex flex-col  items-start">
              <div className="">
                <div className="bg-slate-400  inline-flex items-center gap-1 px-1 rounded w-16 h-7">
                  <PiPlay />
                  <span className="text-[rgb(1,20, 8)] font-medium">Flow</span>
                </div>
                <div className="mt-10 relative flex items-center">
                  <Box>Collaboration, suffers</Box>
                  <div className="pt-14">
                    <Image
                      src="/connect.svg"
                      width={300}
                      height={300}
                      alt="conector"
                      className="object-contain w-32"
                    />
                  </div>
                  <Box className="mt-28">designers&apos; vision gets lost,</Box>
                  <div className="pt-14">
                    <Image
                      src="/connectb.svg"
                      width={300}
                      height={300}
                      alt="conector"
                      className="object-contain w-32 "
                    />
                  </div>
                  <Box className="">frustration sets in.</Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
