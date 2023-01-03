export type Question = {
  id: string;
  status: number;
  category: string;
  type: string;
  level: string;
  content: string;
  score: number;
  answers: Answer[];
  user: User;
  likeCount: number;
};

export type Answer = {
  id: string;
  status: number;
  content: string;
  correct: boolean;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  status: number;
  firstName: string;
  lastName: string;
  role: string;
};
