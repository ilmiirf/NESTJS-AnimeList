"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api.libs";

const page = () => {
  const [page, setPage] = useState<number>(1);
  const [topAnime, setTopAnime] = useState<any>([]);

  const handlePageChange = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    handlePageChange();
  }, [page]);

  return (
    <div className="text-color-primary">
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList data={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default page;
