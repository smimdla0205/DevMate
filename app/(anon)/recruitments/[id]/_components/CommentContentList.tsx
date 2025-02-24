import styles from "./CommentContentList.module.scss";

import type { Project } from "@/domain/entities/project";

import CommentContent from "./CommentContent";

interface CommentContentProps {
  projects: Project;
}

const CommentContentList: React.FC<CommentContentProps> = ({ projects }) => {
  return (
    <div className={styles.commentContentList}>
      <p>
        댓글 <span>{projects.comments.length}</span>
      </p>
      {projects.comments.map((comment) => (
        <CommentContent key={comment.id} comment={comment} comments={comment.replies} />
      ))}
    </div>
  );
};

export default CommentContentList;
