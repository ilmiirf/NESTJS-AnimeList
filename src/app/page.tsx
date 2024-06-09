import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api.libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendation = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  const reproduce = (data: any, gap: number) => {
    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last = first + gap;

    const response = { data: data.slice(first, last) }; //manipulasi data biar bisa di mapping di komponen AnimeList, jadi pake .data
    return response;
  };

  recomendation = reproduce(recomendation, 5);

  return (
    <>
      <section className="pb-6">
        <Header title="Most Popular" linkHref="/populer" linkText="See All" />
        <AnimeList data={topAnime} />
      </section>
      <section className="pb-10">
        <Header title="Recommendation for you" />
        <AnimeList data={recomendation} />
      </section>
    </>
  );
};
export default Home;
