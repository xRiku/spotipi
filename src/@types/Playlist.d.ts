type Playlist = {
    href: string,
    id: string,
    name: string,
    description: string,
    images: Array<Image>
    owner: Owner,
    type: string,
    tracks: {
        href: string,
        total: number
    },
    external_urls: {
        spotify: string
    }
}


type Owner = {
    display_name: string,
    id: string
}

export { Playlist }