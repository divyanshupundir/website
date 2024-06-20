import Link from "next/link";
import { PostData, getAllPosts } from "./post-data";

export default function BlogPage() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="text-3xl sm:text-5xl">blog</h1>
      <ul className="mt-8 space-y-8 sm:mt-10">
        {getAllPosts().map((post) => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostListItem(data: PostData) {
  return (
    <Link href={`/blog/${data.id}`}>
      <div className="space-y-2 transition-colors duration-500 hover:text-primary">
        <div className="text-xs sm:text-sm">{data.date}</div>
        <p className="text-lg sm:text-xl">{data.title}</p>
      </div>
    </Link>
  );
}
