import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import React from "react";

interface SearchPageProps {
  params: { keyword: string };
}
const Page = async ({ params }: SearchPageProps) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      <section>
        <Header title={`Pencarian untuk "${decodedKeyword}"`} />
        <AnimeList data={searchAnime} />
      </section>
    </>
  );
};

export default Page;
