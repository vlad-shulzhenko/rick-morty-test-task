import React, {
  createContext,
  useContext,
  useEffect, useMemo,
  useState,
} from 'react';
import getCharacters from 'api';
import { CharacterItem, IChildren, User } from 'types/shared';

interface CharacterContextInterface {
  characters: CharacterItem[],
  selectedCharacter: CharacterItem,
  setSelectedCharacter: (value: CharacterItem) => void,
  pageQty: number,
  pageNumber: number,
  query: string,
  setQuery: (value: string) => void,
  setPageNumber: (value: number) => void,
  likedCharacters: CharacterItem[],
  setLikedCharacters: (value: CharacterItem[]) => void,
  user: User,
  setUser: (value: User) => void,
  authUser: boolean,
  setAuthUser: (value: boolean) => void,
}

export const CharacterContext = createContext<CharacterContextInterface>({} as CharacterContextInterface);

const useCharacterContext = () => useContext(CharacterContext);

const CharacterContextProvider = ({ children }: IChildren) => {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [likedCharacters, setLikedCharacters] = useState<CharacterItem[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState('');
  const [pageQty, setPageQty] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>({} as CharacterItem);
  const [user, setUser] = useState<User>({} as User);
  const [authUser, setAuthUser] = useState(false);
  const value = useMemo(() => {
    return {
      characters,
      selectedCharacter,
      setSelectedCharacter,
      pageQty,
      pageNumber,
      query,
      setQuery,
      setPageNumber,
      likedCharacters,
      setLikedCharacters,
      user,
      setUser,
      authUser,
      setAuthUser,
    };
  }, [characters, selectedCharacter, query, pageNumber, likedCharacters, authUser, user]);

  useEffect(() => {
    async function fetchData() {
      const obj = await getCharacters(pageNumber, query);
      setPageQty(obj.data.info.pages);
      setCharacters(obj.data.results);
    }
    fetchData();
  }, [pageNumber, query]);

  return (
    <CharacterContext.Provider
      value={value}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContextProvider, useCharacterContext };
