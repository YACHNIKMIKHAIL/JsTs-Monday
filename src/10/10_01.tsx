export type UserType = {
    name: string
    hair: number
    address: { city: any | string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & { laptop: LaptopType }
export type UserWithBooks = UserType & { books: Array<string> }

export type WithCompanies = { companies: Array<{ id: number, title: string }> }

export const makeHairStyle = (u: UserType, power: number) => {
    let copy = {...u, hair: u.hair / power}
    return copy
}

export const moveUserToOtherCity = (u: UserWithLaptop, city: string) => {
    return {
        ...u,
        address: {...u, city: city}
    }
}

export const moveUserToOtherHouse = (u: UserWithLaptop & UserWithBooks, house: number) => {
    return {
        ...u,
        address: {...u, house: house}
    }
}

export const upgradeUser = (u: UserWithLaptop, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const addNewBooksToUser = (u: UserWithLaptop & UserWithBooks,
                                  newBooks: Array<string>) => {
    return {
        ...u,
        books: [
            ...u.books, newBooks
        ]
    }
}

export const updateBook = (u: UserWithLaptop & UserWithBooks,
                           oldBook: string,
                           newBook: string) => ({
        ...u,
        books: u.books.map(m => m === oldBook ? newBook : m)
    }
)

export const removeBook = (u: UserWithLaptop & UserWithBooks,
                           bookForDelete: string) => ({
        ...u,
        books: u.books.filter(f=>f!==bookForDelete)
    }
)

export const addNewCompanyToUser = (u:UserWithLaptop & WithCompanies, newCompany:{ id: number, title: string }) => {
    ({...u,
    companies: u.companies.push(newCompany)})
}
