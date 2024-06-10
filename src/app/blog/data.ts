export interface BlogData {
  date: string;
  title: string;
  link: string;
}

export const blogs: BlogData[] = [
  {
    date: "Jun 10, 2024",
    title: "Advanced mavlink-kotlin - Part 4: Example micorservices",
    link: "/blog/advanced-mavlink-kotlin-part-4",
  },
  {
    date: "Jun 2, 2024",
    title: "Advanced mavlink-kotlin - Part 3: Error handling",
    link: "/blog/advanced-mavlink-kotlin-part-3",
  },
  {
    date: "May 31, 2024",
    title: "Advanced mavlink-kotlin - Part 2: Utilities and extensions",
    link: "/blog/advanced-mavlink-kotlin-part-2",
  },
  {
    date: "May 30, 2024",
    title: "Advanced mavlink-kotlin - Part 1: Core interfaces",
    link: "/blog/advanced-mavlink-kotlin-part-1",
  },
  {
    date: "May 22, 2024",
    title:
      "A layman's guide to setting up an MDX blog with Next.js and Tailwind CSS",
    link: "/blog/next-js-mdx",
  },
  {
    date: "Sep 17, 2022",
    title: "A modern MAVLink library for the JVM written in Kotlin",
    link: "https://medium.com/urbanmatrix-technologies/a-modern-mavlink-library-for-the-jvm-written-in-kotlin-8108eff3aad7",
  },
  {
    date: "Sep 14, 2022",
    title: "Open Technology — The only way forward for Indian Robotics",
    link: "https://medium.com/urbanmatrix-technologies/open-technology-the-only-way-forward-for-indian-robotics-e529806c9f3c",
  },
  {
    date: "Aug 32, 2022",
    title: "Data Security in 4G Drones",
    link: "https://www.urbanmatrix.co.in/whitepapers/data-security-in-4g-drones",
  },
  {
    date: "Jul 22, 2022",
    title: "The Missing Guide to Protobuf Insertion Points in Java/Kotlin",
    link: "https://medium.com/urbanmatrix-technologies/the-missing-guide-to-protobuf-insertion-points-in-java-kotlin-2f1b2bb183db",
  },
];
