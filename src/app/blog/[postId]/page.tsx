import { notFound } from "next/navigation";
import { getAllPosts } from "../post-data";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const data = getAllPosts().find((post) => post.id === params.postId);

  if (!data) {
    notFound();
  }

  if (data.externalLink) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="text-2xl">this post is hosted externally</div>
        <Link href={data.externalLink}>
          <div className="space-y-2 text-2xl transition-colors duration-500 hover:text-primary">
            take me there
          </div>
        </Link>
      </div>
    );
  }

  const PostContent = (await import(`../content/${params.postId}.mdx`)).default;

  return (
    <div className={"prose m-4 sm:m-8 sm:mx-auto"}>
      <PostContent />
    </div>
  );
}
