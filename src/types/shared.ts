export interface IChildren {
  children?: JSX.Element | JSX.Element[];
}

export interface CharacterItem {
  name: string,
  id: number,
  image: string,
  species: string,
  gender: string,
  location: { name: string },
  episode: string[],
  status: string,
  created: string,
}

export interface User {
  name: string,
  picture: {
    data: {
      url: string,
      height: number,
      width: number,
    }
  }
}
