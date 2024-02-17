import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParms }) {
  // const genre = searchParms.genre || 'fetchTrending';
  // const res = await fetch(
  //   `https://api.themoviedb.org/3${
  //     genre === 'fetchTopTated' ? `/movie/top_rated` : `trending/all/week`
  //   }?api_key=${API_KEY}&language=en-US&page=1 `
  // );
  const res = await fetch(
    `https://api.themoviedb.org/3${`/movie/top_rated`}?api_key=${API_KEY}&language=en-US&page=1 `,
    { next: { revalidate: 5 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed");
  }
  const results = data.results;

  return (
    <div>
      <Results reslts={results} />
    </div>
  );
}
