import { ImageResponse } from "next/og";
import { blogs } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
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
