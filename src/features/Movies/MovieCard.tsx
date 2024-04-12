import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

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
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src="/movie-thumb.png"
        alt="Movie thumbnail"
      />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <span className={styles.overview}>{overview}</span>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
