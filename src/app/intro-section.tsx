import Image from "next/image";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="h-screen w-screen">
      <Image
        src="/home.jpg"
        alt="Home"
        fill
        className="h-full w-full object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-background/90 to-background/70" />
      <div className="absolute">
        <h1 className="m-4 text-4xl sm:m-8 sm:text-6xl">divyanshu pundir</h1>
        <div className="m-4 flex flex-col gap-4 sm:m-8 sm:flex-row sm:gap-8">
          <Item first="software" second="engineer" />
          <Item first="product" second="developer" />
          <Item first="startup" second="founder" />
        </div>
      </div>
      <div className="absolute bottom-0 m-4 flex flex-col gap-4 sm:m-8 sm:flex-row sm:gap-8">
        <ItemWithLink first="read" second="blog" link="/blog" />
        <ItemWithLink
          first="follow"
          second="github"
          link="https://github.com/divyanshupundir"
        />
        <ItemWithLink
          first="connect"
          second="linkedin"
          link="https://www.linkedin.com/in/divyanshu-pundir-212933145/"
        />
        <ItemWithLink
          first="view"
          second="behance"
          link="https://www.behance.net/divyanshupundir"
        />
      </div>
    </section>
  );
}

function Item({ first, second }: { first: string; second: string }) {
  return (
    <p className="text-xs sm:text-sm">
      {first} <span className="text-lg font-bold sm:text-xl">{second}</span>
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
      <p className="text-xs transition-colors duration-500 hover:text-primary sm:text-sm ">
        {first} <span className="text-lg font-bold sm:text-xl">{second}</span>
      </p>
    </Link>
  );
}
