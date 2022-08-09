type User = {
    display_name: string,
    id: string,
    images: Array<Image>,
    followers: {
        total: number
    }
    email: string,
    product: string,
    country: string,
}

export { User };