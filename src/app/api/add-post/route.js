import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(request) {
  const res = await request.json();
  const { title, content } = res;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: true,
      author: {
        create: {
          name: "suhas",
        },
      },
    },
  });
  console.log({ res });

  return NextResponse.json({ result });
}
