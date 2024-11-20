import Hero from "@/sections/home/hero";
import Step from "@/sections/home/step";
import Thumbnail from "@/sections/home/thumbnail";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Thumbnail />
      <Step />
    </main>
  );
}
