type User = {
    display_name: string,
    id: string,
    images: Array<Image>,
    followers: {
        total: number
    }
    email: string
}

export { User };