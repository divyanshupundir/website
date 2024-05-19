import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="m-8">
      <h1 className="text-3xl sm:text-5xl">blog</h1>
      <ul className="mt-10 space-y-8">
        <li>
          <BlogListItem
            date="Sep 17, 2022"
            title="A modern MAVLink library for the JVM written in Kotlin"
            link="https://medium.com/urbanmatrix-technologies/a-modern-mavlink-library-for-the-jvm-written-in-kotlin-8108eff3aad7"
          />
        </li>
        <li>
          <BlogListItem
            date="Sep 14, 2022"
            title="Open Technology — The only way forward for Indian Robotics"
            link="https://medium.com/urbanmatrix-technologies/open-technology-the-only-way-forward-for-indian-robotics-e529806c9f3c"
          />
        </li>
        <li>
          <BlogListItem
            date="Aug 32, 2022"
            title="Data Security in 4G Drones"
            link="https://www.urbanmatrix.co.in/whitepapers/data-security-in-4g-drones"
          />
        </li>
        <li>
          <BlogListItem
            date="Jul 22, 2022"
            title="The Missing Guide to Protobuf Insertion Points in Java/Kotlin"
            link="https://medium.com/urbanmatrix-technologies/the-missing-guide-to-protobuf-insertion-points-in-java-kotlin-2f1b2bb183db"
          />
        </li>
      </ul>
    </div>
  );
}

function BlogListItem({
  date,
  title,
  link,
}: {
  date: string;
  title: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="space-y-2 transition-colors duration-500 hover:text-accent">
        <div className="text-xs sm:text-sm">{date}</div>
        <p className="text-lg sm:text-xl">{title}</p>
      </div>
    </Link>
  );
}
