type ArtistType = {
    type: string;
    artists: Artist[];
}


type Artist = {
    href: string,
    id: string,
    name: string,
    genres: Array<string>,
    images: Array<Image>,
    popularity: number,
    uri: string,
    external_urls: {
        spotify: string
    }
}

type Image = {
    url: string,
}

export { Artist, Image, ArtistType }