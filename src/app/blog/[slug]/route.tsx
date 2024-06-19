import { ImageResponse } from "next/og";
import { blogs } from "../data";
// App router includes @vercel/og.
// No need to install it.

export async function GET({ params }: { params: { slug: string } }) {
  console.log("slug is", params.slug);
  const blogData = blogs.find((blog) => blog.link === `/blog/${params.slug}`);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="m-16 flex flex-col text-white ">
          <h1>{blogData?.title ?? "Not found"}</h1>
          <p>{blogData?.date ?? ""}</p>
        </div>
      </div>
    ),
  );
}
