"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DeleteBtn({ postId }) {
  const router = useRouter();
  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }
  return <button onClick={handleClick}>Delete Post</button>;
}

export default DeleteBtn;
