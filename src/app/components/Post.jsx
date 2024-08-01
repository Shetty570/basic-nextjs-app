import React from "react";
import DeleteBtn from "./DeleteBtn";

function Post({ id, title, content, authorName }) {
  return (
    <div style={{ border: "1px solid white", padding: "15px" }}>
      <h3 className="">{authorName}</h3>
      <h4 className="">{title}</h4>
      <p>{content}</p>
      <DeleteBtn postId={id} />
    </div>
  );
}

export default Post;
