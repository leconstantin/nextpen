import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto mt-4 py-6 ">
      <div className="flex flex-col">
        <div className="mb-6 p-2 ml-2.5">
          <div className="flex items-center">
            <div className="bg-[#dde3e9] py-2 px-4 rounded-xl">
              <span className="text-sm ">
                Penpot 2.3 release -{" "}
                <span className="font-medium cursor-pointer hover:underline">
                  See what&apos; new
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="p-8 mb-7 relative">
          <div className="absolute w-1/4 left-7 top-11 z-10">
            <Image
              src="/bakhero.png"
              width={500}
              height={100}
              alt="back"
              className="object-contain opacity-50"
            />
          </div>
          <h1 className="text-7xl -ml-2 text-left font-bold max-w-4xl tracking-tighter text-[#151035] z-20 relative">
            Design and code beautiful products.{" "}
            <span className="text-[#00d1b8]">Together</span>
          </h1>
        </div>
        <div className="px-6 text-lg font-normal max-w-xl">
          Penpot is the web-based open-source{" "}
          <a href="" className="font-medium">
            design tool
          </a>{" "}
          that bridges the gap between designers and developer
        </div>
        <div className="mt-7 flex relative pl-24px">
          <div className="px-6 flex gap-5">
            <button className="bg-[#32efb9] hover:bg-[#239d7a] cursor-pointer px-5 py-3 rounded-lg hover:text-white ease-in duration-300">
              <span className="font-medium ">Sign Up, it&apos;s free</span>
            </button>
            <button className="bg-white hover:bg-neutral-900 cursor-pointer px-5 py-3 rounded-lg hover:text-white ease-in duration-300">
              <span className="font-medium ">Sign Up, it&apos;s free</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
