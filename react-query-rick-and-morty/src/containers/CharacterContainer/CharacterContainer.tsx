import Character from "components/Character/Character";
import { useCallback, useEffect, useState } from "react";
import { QueriesResults, QueryFunction, useQuery } from "react-query";
import { useListCharactersQuery } from "store/module/character/services";
import { CharacterResponse, DetailCharacter } from "types/Character";

type CharacterContainerProps = {};

const CharacterContainer: React.VFC<CharacterContainerProps> = (props) => {
  // const fetchData = useCallback(async () => {
  //   const response = await fetch("https://rickandmortyapi.com/api/character");
  //   const data: CharacterResponse = await response.json();
  //   setCharacters([...data.results]);
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const [page, setPage] = useState(1);

  // const { isLoading, error, data } = useQuery<CharacterResponse, any>(
  //   ["character", page],
  //   async ({ queryKey }) => {
  //     const response = await fetch(
  //       "https://rickandmortyapi.com/api/character?page=" + queryKey[1]
  //     );
  //     return response.json();
  //   }
  // );

  const { data, error, isLoading } = useListCharactersQuery({ page });

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {error}</>;

  return (
    <div className="characters">
      {data &&
        data.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!(data && data.info && data.info.next)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterContainer;
