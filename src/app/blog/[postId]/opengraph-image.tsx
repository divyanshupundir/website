import { ImageResponse } from "next/og";
import { getAllPosts } from "../post-data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function OpengraphImage({
  params,
}: {
  params: { postId: string };
}) {
  const data = getAllPosts().find((post) => post.id === params.postId);

  if (!data) {
    notFound();
  }

  /* eslint-disable @next/next/no-img-element */
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
                tw="aspect-square rounded-full border-2 border-white object-cover"
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
