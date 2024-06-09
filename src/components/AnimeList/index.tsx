import { Datum, TopAnime } from "@/types/animeType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

interface AnimeListProps {
  data: TopAnime;
}

const AnimeList = ({ data }: AnimeListProps) => {
  return (
    <div className="grid grid-cols-2 gap-5 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 px-6">
      {data.data?.map((item: Datum) => {
        return (
          <>
            <Link
              key={item.mal_id}
              href={`/anime/${item.mal_id}`}
              className={`cursor-pointer text-color-primary transition-all duration-300 rounded-xl relative group hover:scale-[105%] `}
            >
              <div>
                <Image
                  src={item.images.webp.image_url}
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full object-cover aspect-[3/5] rounded-xl"
                />
              </div>
              <div
                className={`absolute w-full rounded-xl inset-0 bg-[#2a1022bf] opacity-0 p-2 group-hover:opacity-100 transition-all duration-300`}
              >
                <h3 className="text-lg font-semibold text-light">
                  {item.title}
                </h3>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default AnimeList;
