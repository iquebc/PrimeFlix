import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function get() {
      const results = await getMovies();
      setFilmes(results.slice(0, 10));
      setLoading(false);
    }

    get();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Carregando Filmes</h2>
      </div>
    );
  }

  return (
    <div className="container">
      {filmes.map((filme) => {
        return (
          <article className="lista-filmes" key={filme.id}>
            <strong>{filme.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            ></img>
            <Link to={`filmes/${filme.id}`}>Acessar</Link>
          </article>
        );
      })}
    </div>
  );
}

export default Home;
