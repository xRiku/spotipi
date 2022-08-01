type SongType = {
    type: string;
    songs: Song[];
}

type Song = {
    name: string,
    artists: Array<Artist>,
    album: Album,
    explicit: boolean,
    href: string,
    popularity: number,
    id: string
}

type Album = {
    album_type: string,
    images: Array<Image>,
    href: string,
    name: string,
}

type Features = {
    danceability: number,
    energy: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    valence: number,
}

export { Song, Album, SongType, Features }

