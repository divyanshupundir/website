import { ImageResponse } from "next/og";
import { getAllPosts } from "../post-data";
import { notFound } from "next/navigation";

export default async function Image({
  params,
}: {
  params: { postId: string };
}) {
  const data = getAllPosts().find((post) => post.id === params.postId);

  if (!data) {
    notFound();
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="m-16 flex flex-col text-white ">
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
      </div>
    ),
  );
}
