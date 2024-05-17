import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
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
        </div>
      </section>
      <section className="h-screen w-screen">Section 2</section>
    </main>
  );
}
