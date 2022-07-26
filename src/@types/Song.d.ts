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

export { Song, Album }

