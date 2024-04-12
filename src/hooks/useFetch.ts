import axios from "axios";
import { useEffect, useState } from "react";
import { Characters } from "../components/Characters/Characters";
const baseRoot = "https://rickandmortyapi.com/api/";

export type Info = { count: number; pages: number };
export type Character = {
  name: string;
  id: number;
  image: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  },location: {
    name: string,
    url: string
  };
};
export type Episode = { name: string; id: number; episode: string };

const useFetch = <T>(
  path: "character" | "location" | "episode",
  page: number = 1
) => {
  const [list, setList] = useState<T[]>([]);
  const [info, setInfo] = useState<Info | null>(null);

  const loadData = async () => {
    const response = await axios.get<{ results: T[]; info: Info }>(
      `${baseRoot}/${path}?page=${page}`
    );
    setList(response.data.results);

    setInfo(response.data.info);
  };

  useEffect(() => {
    loadData();
  }, [path, page]);

  return [list, info] as [T[], Info];
};

export const useCharacters = (page: number = 1) =>
  useFetch<Character>("character", page);
export const useEpisodes = (page: number = 1) =>
  useFetch<Episode>("episode", page);

// export const useCharacters = () => useFetch<Character>('character');