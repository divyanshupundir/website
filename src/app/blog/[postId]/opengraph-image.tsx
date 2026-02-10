import { ImageResponse } from "next/og";
import { getAllPosts } from "../post-data";
import { notFound } from "next/navigation";

export const alt = "Divyanshu's blog post";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    postId: post.id,
  }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const data = getAllPosts().find((post) => post.id === postId);

  if (!data) {
    notFound();
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full px-16 py-24 text-white bg-black">
        <div tw="flex h-full flex-col justify-between">
          <div tw="flex flex-col">
            <div tw="text-4xl">{data.date}</div>
            <div tw="mt-8 text-6xl font-semibold">{data.title}</div>
          </div>
          <div tw="flex items-center justify-between">
            <div tw="flex items-center">
              <img
                src="https://github.com/divyanshupundir.png"
                alt="Divyanshu Pundir"
                width={100}
                height={100}
                tw="rounded-full border-2 border-white"
              />
              <div tw="mx-8 text-3xl">divyanshu pundir</div>
            </div>
            <div tw="text-3xl">divpundir.com</div>
          </div>
        </div>
      </div>
    ),
  );
}
