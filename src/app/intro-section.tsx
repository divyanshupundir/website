import Image from "next/image";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="h-screen w-screen">
      <Image
        src="/home.jpg"
        alt="Home"
        layout="fill"
        objectFit="cover"
        className="h-full w-full"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-background/90 to-background/70" />
      <div className="absolute">
        <h1 className="m-8 text-4xl sm:text-6xl">divyanshu pundir</h1>
        <div className="m-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <Item first="software" second="engineer" />
          <Item first="android" second="developer" />
          <Item first="open-source" second="contributor" />
        </div>
      </div>
      <div className="absolute bottom-0 m-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
        <ItemWithLink first="read" second="blog" link="/" />
        <ItemWithLink first="follow" second="github" link="/" />
        <ItemWithLink first="connect" second="lnkedin" link="/" />
        <ItemWithLink first="view" second="behance" link="/" />
      </div>
    </section>
  );
}

function Item({ first, second }: { first: string; second: string }) {
  return (
    <p className="text-xs sm:text-sm">
      {first} <span className="text-lg font-bold sm:text-2xl">{second}</span>
    </p>
  );
}

function ItemWithLink({
  first,
  second,
  link,
}: {
  first: string;
  second: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <p className="text-xs hover:text-accent sm:text-sm">
        {first} <span className="text-lg font-bold sm:text-2xl">{second}</span>
      </p>
    </Link>
  );
}
