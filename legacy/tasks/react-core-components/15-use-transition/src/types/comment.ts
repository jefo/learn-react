export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Comment {
  id: number;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

export interface CommentThread {
  id: number;
  title: string;
  comments: Comment[];
}
