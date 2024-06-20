import { ImageResponse } from "next/og";
import { BlogData, getAllBlogs } from "../data";

export function getOpengraphImage(link: string) {
  const data = getAllBlogs().find((blog) => blog.link === link);

  if (data) {
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
  } else {
    return new ImageResponse(
      (
        <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
          <div tw="m-16 flex flex-col text-white ">
            <h1>Not found</h1>
          </div>
        </div>
      ),
    );
  }
}
