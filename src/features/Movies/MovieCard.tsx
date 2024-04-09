import { Link } from "react-router-dom";

import "./Movies.css";

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  popularity: number;

  // id: number;
  // original_language: string;
  // original_title: string;
  // overview: string;
  // popularity: number;
  // poster_path: string | null;
  // release_date: number;
  // title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className="Movies-card">
      <Link to={`/movies/${id}`}>{title}</Link>
      <div className="Movies-card-overview">{overview}</div>
      <div className="Movies-card-popularity">{popularity}</div>
    </div>
  );
}
