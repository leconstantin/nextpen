import Image from "next/image";

export default function Thumbnail() {
  return (
    <div>
      <div className=" relative flex items-center justify-center mt-4 mb-20 px-8">
        <div className="absolute justify-end  -top-28 right-[10%] z-10">
          <Image
            src="/dots.png"
            alt="doted back"
            width={250}
            height={251.885}
            className="object-contain"
          />
        </div>
        {/* <div className="absolute justify-end left-[20%] top-auto right-[20%] bottom-24 shadow-lg bg-red-400">
          <Image
            src="/thumbback.png"
            alt=" back"
            width={758}
            height={376}
            className="object-contain"
          />
        </div> */}
        <div className="flex justify-stretch items-start max-w-7xl mx-auto shadow border-[15px]  border-white rounded-lg ">
          <video
            autoPlay
            loop
            muted
            src="/videohero.webm"
            className="rounded-lg object-contain z-20"
          ></video>
        </div>
      </div>
    </div>
  );
}
