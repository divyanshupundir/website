import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  let PostContent;

  try {
    PostContent = (await import(`../content/${params.postId}.mdx`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <div className={"prose m-4 sm:m-8 sm:mx-auto"}>
      <PostContent />
    </div>
  );
}
