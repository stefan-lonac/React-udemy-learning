import { useMemo, useState } from "react";
import { ArticlesProps } from "./types/article.type";

function Articles({ articles }: ArticlesProps) {
  const [sortArticles, setSortArticles] = useState(articles)
  const [number, setNumber] = useState(0)

  const handleMostUpvoted = () => {
    const sorted = [...sortArticles].sort((a, b) => b.upvotes - a.upvotes)
    setSortArticles(sorted);
  }

  const handleMostRecent = () => {
    const sorted = [...sortArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
    setSortArticles(sorted);
  }

  const computeFactorial = (n: number) => {
    console.log("Calculating factorial...", n);
    return n <= 1 ? 1 : n * computeFactorial(n - 1);
  };
  const factorial = useMemo(() => computeFactorial(number), [number])

  return (
    <>
    <div style={{margin: '20px'}}>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      Factorial of {number} is {factorial}
    </div>

    <div>
      <button
        data-testid="most-upvoted-link"
        className="small"
        onClick={handleMostUpvoted}
      >
        Most Upvoted
      </button>
      <button
        data-testid="most-recent-link"
        className="small"
        onClick={handleMostRecent}
      >
        Most Rece
      </button>
    </div>
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortArticles.map((article, index) => {
            return (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
            )
          })}

        </tbody>
      </table>
    </div>
    </>
  );
}

export default Articles;