type Artist = {
    href: string,
    id: string,
    name: string,
    genres: Array<string>,
    images: Array<Image>,
    popularity: number,
    uri: string,
}

type Image = {
    url: string,
}

export { Artist, Image }