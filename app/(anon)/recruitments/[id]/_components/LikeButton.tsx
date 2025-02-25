"use client";

import { useState } from "react";

interface LikeButtonProps {
  projectId: number;
  likes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ projectId, likes }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = async () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikeCount(newLikedState ? likeCount + 1 : likeCount - 1);

    // await fetch(`/api/posts/like?id=${projectId}`, { method: "POST" });
  };

  return (
    <button onClick={handleLike}>
      {liked ? "❤️" : "🤍"} {likeCount}
    </button>
  );
};

export default LikeButton;
