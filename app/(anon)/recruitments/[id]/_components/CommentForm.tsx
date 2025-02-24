"use client";

import { useState } from "react";

interface CommentFormProps {
  projectId: number;
  parentId?: number;
}

const CommentForm: React.FC<CommentFormProps> = ({ projectId, parentId }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("댓글 달기", projectId, parentId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="댓글 입력..." />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentForm;
