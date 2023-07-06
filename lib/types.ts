export interface Comment {
  _id: number;
  name: string;
  comment_text: string;
  timestamp: string;
  upvotes: number;
  downvotes: number;
}

export interface Film {
  title: string;
  film_id: number;
  justWatchId: number;
  director: string;
  year: number;
  runtime: string;
  genre: string[];
  writers: string[];
  cinematography: string[];
  soundtrack: string[];
  notable_actors: string[];
  blurb: string;
  special_category: string[];
  tags: string[];
  trailer: string;
  trivia: string[];
  review_text: string;
  review_score: number | null;
  thumbnail: string;
  img_bank: string[];
  headline: string;
  comments: Comment[];
}

export type ButtonType = 'year' | 'alpha' | 'random';

export type ButtonOrder = 'asc' | 'desc' | null;

export type Categories = 'genres' | 'categories' | 'artists';

export type Artists = {
  directors: string[];
  writers: string[];
  cinematographers: string[];
  musicians: string[];
  actors: string[];
};
