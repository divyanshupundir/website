import { notFound } from "next/navigation";
import { getAllPosts } from "../post-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    postId: post.id,
  }));
}

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
      <div className="flex h-screen items-center justify-center">
        <div className="m-4 border p-8 sm:min-w-[600px]">
          <div className="flex flex-col">
            <div className="text-xs sm:text-sm">{data.date}</div>
            <div className="mt-2 text-lg font-semibold sm:text-xl">
              {data.title}
            </div>
            <div className="mt-4">this post is hosted on an external site</div>
            <div className="mt-4 flex justify-between">
              <Button
                asChild
                variant="outline"
                className="transition-colors duration-500 hover:bg-primary"
              >
                <Link href="/blog">back</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="transition-colors duration-500 hover:bg-primary"
              >
                <Link href={data?.externalLink}>continue</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const PostContent = (await import(`../content/${params.postId}.mdx`)).default;

  return (
    <div className={"prose m-4 sm:m-8 sm:mx-auto"}>
      <h3>{data.date}</h3>
      <h1>{data.title}</h1>
      <PostContent />
    </div>
  );
}
