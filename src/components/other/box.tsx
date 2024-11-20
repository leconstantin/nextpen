import { twMerge } from "tailwind-merge";

export default function Box(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { children, className } = props;
  return (
    <div className={twMerge("relative", className)}>
      <div className="size-4 bg-white ring-2 ring-green-400 absolute z-20 -top-1 -left-2"></div>
      <div className="size-4 bg-white ring-2 ring-green-400 absolute z-20 -right-2 -top-1"></div>
      <div className="size-4 bg-white ring-2 ring-green-400 absolute z-20 -bottom-1 -left-2"></div>
      <div className="size-4 bg-white ring-2 ring-green-400 absolute z-20 -bottom-1 -right-2"></div>
      <div className="relative h-36 px-8 pb-3 flex items-center justify-center bg-white shadow-lg border-2 border-green-400 rounded-lg">
        <p className="text-2xl font-medium text-left text-[#151035]">
          {children}
        </p>
      </div>
    </div>
  );
}
