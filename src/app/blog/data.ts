export interface BlogData {
  date: string;
  title: string;
  link: string;
}

export const blogs: BlogData[] = [
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
