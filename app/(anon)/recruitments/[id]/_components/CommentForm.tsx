"use client";

import { useState } from "react";

import styles from "./CommentForm.module.scss";

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
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="댓글을 작성해보세요." rows={4} />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentForm;
