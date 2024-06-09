import { getAnimeResponse } from "@/libs/api.libs";
import React from "react";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

interface DetailPageProps {
  params: { id: string };
}
const page = async ({ params: { id } }: DetailPageProps) => {
  const anime = await getAnimeResponse(`anime/${id}`, "");
  return (
    <div className="text-primary p-10">
      <div className="mb-6">
        <h3 className="text-3xl ">{anime.data.title}</h3>
      </div>
      <div className="flex gap-4 p-4 overflow-x-auto mb-6">
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center ">
          <h4 className="font-semibold">Rank</h4>
          <p>{anime.data.rank}</p>
        </div>
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center">
          <h4 className="font-semibold">Score</h4>
          <p>{anime.data.score}</p>
        </div>
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center">
          <h4 className="font-semibold">Scored By</h4>
          <p>{anime.data.scored_by}</p>
        </div>
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center">
          <h4 className="font-semibold">Popularity</h4>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center">
          <h4 className="font-semibold">favorites</h4>
          <p>{anime.data.score}</p>
        </div>
        <div className="border-2 border-accent-100 p-4 rounded-md bg-accent-400 bg-opacity-40 min-w-32 text-center">
          <h4 className="font-semibold">Members</h4>
          <p>{anime.data.members}</p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-10 px-4 sm:mb-0 mb-6">
        <Image
          src={anime.data.images.webp.image_url}
          alt="..."
          width={500}
          height={500}
          className="rounded-xl h-fit"
        />
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm mb-2">Genres</h3>
            <div className="flex gap-2">
              {anime.data.genres.map((genre: any) => {
                return (
                  <div
                    key={genre.mal_id}
                    className="px-2 py-1 bg-accent-200 rounded"
                  >
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex sm:flex-nowrap flex-wrap gap-12">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-sm">Episodes</h3>
                <p className="font-semibold text-md">{anime.data.episodes}</p>
              </div>
              <div>
                <h3 className="text-sm">Duration</h3>
                <p className="font-semibold text-md">{anime.data.duration}</p>
              </div>
              <div>
                <h3 className="text-sm">Rating</h3>
                <p className="font-semibold text-md">{anime.data.rating}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-sm">Year</h3>
                <p className="font-semibold text-md">{anime.data.year}</p>
              </div>
              <div>
                <h3 className="text-sm">Source</h3>
                <p className="font-semibold text-md">{anime.data.source}</p>
              </div>
              <div>
                <h3 className="text-sm">Season</h3>
                <p className="font-semibold text-md">{anime.data.season}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm">Synopsis</h3>
            <p>{anime.data.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default page;
