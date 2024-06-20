import Link from "next/link";
import { getAllBlogs as getAllBlogData } from "./data";

export default function BlogPage() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="text-3xl sm:text-5xl">blog</h1>
      <ul className="mt-8 space-y-8 sm:mt-10">
        {getAllBlogData().map((blog) => (
          <li key={blog.link}>
            <BlogListItem {...blog} />
          </li>
        ))}
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
      <div className="space-y-2 transition-colors duration-500 hover:text-primary">
        <div className="text-xs sm:text-sm">{date}</div>
        <p className="text-lg sm:text-xl">{title}</p>
      </div>
    </Link>
  );
}
