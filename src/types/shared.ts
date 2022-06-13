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
interface PictureData {
    url: string,
    height: number,
    width: number,
}

interface Picture {
  data: PictureData
}

export interface User {
  name: string,
  picture: Picture
}
