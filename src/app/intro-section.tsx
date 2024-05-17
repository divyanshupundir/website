import { cn } from "@/lib/utils";
import Image from "next/image";

export function IntroSection() {
  return (
    <section className="relative h-screen w-screen">
      <Image
        src="/home.jpg"
        alt="Home"
        layout="fill"
        objectFit="cover"
        className="h-full w-full"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-black/90 to-black/70" />
      <div className="absolute">
        <h1 className="m-8 font-mono text-6xl">divyanshu pundir</h1>
        <div className="m-8 flex gap-8">
          <Item first="software" second="engineer" />
          <Item first="android" second="developer" />
          <Item first="open-source" second="contributor" />
        </div>
      </div>
      <div className="absolute bottom-0 m-8 flex w-screen gap-8">
        <Item first="read" second="blog" />
        <Item first="follow" second="github" />
        <Item first="connect" second="lnkedin" />
        <Item first="view" second="behance" />
      </div>
    </section>
  );
}

function Item({ first, second }: { first: string; second: string }) {
  return (
    <p className="text-sm">
      {first} <span className="text-2xl font-bold">{second}</span>
    </p>
  );
}
