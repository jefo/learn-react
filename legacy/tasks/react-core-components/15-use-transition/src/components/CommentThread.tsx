import { useState } from 'react';
import { Comment as CommentType } from '../types/comment';

interface CommentProps {
  comment: CommentType;
  depth?: number;
}

// Неоптимизированный компонент комментария
function Comment({ comment, depth = 0 }: CommentProps) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div
      className="comment"
      style={{ marginLeft: `${depth * 20}px` }}
    >
      <div className="comment-header">
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className="avatar"
        />
        <span className="username">{comment.user.name}</span>
        <span className="timestamp">
          {new Date(comment.timestamp).toLocaleDateString()}
        </span>
      </div>
      
      <div className="comment-content">
        {comment.content}
      </div>
      
      <div className="comment-actions">
        <button className="like-button">
          ❤️ {comment.likes}
        </button>
        
        {comment.replies.length > 0 && (
          <button
            className="reply-toggle"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
          </button>
        )}
      </div>

      {showReplies && (
        <div className="replies">
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ThreadProps {
  comments: CommentType[];
  onLoadMore: () => void;
}

// Неоптимизированный компонент треда комментариев
export function CommentThread({ comments, onLoadMore }: ThreadProps) {
  return (
    <div className="comment-thread">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      
      <button
        className="load-more"
        onClick={onLoadMore}
      >
        Load More Comments
      </button>
    </div>
  );
}
