"use client";

import { useState } from "react";

import type { Comment } from "@/domain/entities/comment";

import CommentForm from "./CommentForm";

interface CommentProps {
  comment: Comment;
  comments?: Comment[];
}

const CommentContent: React.FC<CommentProps> = ({ comment, comments }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleDelete = async () => {
    await fetch(`/api/comments?id=${comment.id}`, { method: "DELETE" });
  };

  return (
    <div style={{ marginLeft: comment.parentCommentId ? "20px" : "0px" }}>
      <p>
        {comment.user.nickname}: {comment.content}
      </p>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>답글</button>
      <button onClick={handleDelete}>삭제</button>

      {showReplyForm && <CommentForm projectId={comment.projectId} parentId={comment.id} />}

      {comments &&
        comments
          .filter((c) => c.parentCommentId === comment.id)
          .map((reply) => <CommentContent key={reply.id} comment={reply} comments={comments} />)}
    </div>
  );
};

export default CommentContent;
