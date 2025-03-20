export interface Articles {
  title: string,
  upvotes: number,
  date: string,
}

export interface ArticlesProps {
  articles: Articles[]
}