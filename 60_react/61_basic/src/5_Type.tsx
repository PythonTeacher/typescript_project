interface Action {
  type: string,
  payload?: any
}

interface MusicType {
  id: number,
  singer: string,
  title: string,
  active: boolean
}

interface MusicStateType {
  input: {
    singer: string,
    title: string
  }
  musics: MusicType[]
}


export type { Action, MusicType, MusicStateType }