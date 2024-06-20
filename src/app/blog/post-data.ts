export interface PostData {
  date: string;
  title: string;
  id: string;
  externalLink?: string;
}

export function getAllPosts() {
  return posts;
}

const posts: PostData[] = [
  {
    date: "Jun 10, 2024",
    title: "Advanced mavlink-kotlin - Part 4: Example micorservices",
    id: "advanced-mavlink-kotlin-part-4",
  },
  {
    date: "Jun 2, 2024",
    title: "Advanced mavlink-kotlin - Part 3: Error handling",
    id: "advanced-mavlink-kotlin-part-3",
  },
  {
    date: "May 31, 2024",
    title: "Advanced mavlink-kotlin - Part 2: Utilities and extensions",
    id: "advanced-mavlink-kotlin-part-2",
  },
  {
    date: "May 30, 2024",
    title: "Advanced mavlink-kotlin - Part 1: Core interfaces",
    id: "advanced-mavlink-kotlin-part-1",
  },
  {
    date: "May 22, 2024",
    title:
      "A layman's guide to setting up an MDX blog with Next.js and Tailwind CSS",
    id: "next-js-mdx",
  },
  {
    date: "Sep 17, 2022",
    title: "A modern MAVLink library for the JVM written in Kotlin",
    id: "mavlink-kotlin-intro",
    externalLink:
      "https://medium.com/urbanmatrix-technologies/a-modern-mavlink-library-for-the-jvm-written-in-kotlin-8108eff3aad7",
  },
  {
    date: "Sep 14, 2022",
    title: "Open Technology — The only way forward for Indian Robotics",
    id: "open-technology-indian-robotics",
    externalLink:
      "https://medium.com/urbanmatrix-technologies/open-technology-the-only-way-forward-for-indian-robotics-e529806c9f3c",
  },
  {
    date: "Aug 32, 2022",
    title: "Data Security in 4G Drones",
    id: "data-security-in-4g-drones",
    externalLink:
      "https://www.urbanmatrix.co.in/whitepapers/data-security-in-4g-drones",
  },
  {
    date: "Jul 22, 2022",
    title: "The Missing Guide to Protobuf Insertion Points in Java/Kotlin",
    id: "protobuf-insertion-points",
    externalLink:
      "https://medium.com/urbanmatrix-technologies/the-missing-guide-to-protobuf-insertion-points-in-java-kotlin-2f1b2bb183db",
  },
];
