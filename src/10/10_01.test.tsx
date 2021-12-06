import {
    addNewBooksToUser, addNewCompanyToUser,
    makeHairStyle, moveUserToOtherCity,
    moveUserToOtherHouse, removeBook, updateBook,
    upgradeUser,
    UserType,
    UserWithBooks,
    UserWithLaptop, WithCompanies
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(100)
    expect(awesomeUser.hair).toBe(50)
    expect(awesomeUser.address).toBe(user.address)

})


test('change adress', () => {
    let user: UserWithLaptop = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUserToOtherCity(user, 'Berlin')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.address.city).not.toBe('Berlin')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('change house', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'react']
    }
    const movedUser = moveUserToOtherHouse(user, 22)

    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).not.toBe(movedUser.address)
    expect(movedUser.address.house).toBe(22)
})


test('upgrade user laptop', () => {
    let user: UserWithLaptop = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const upgradedUserLaptop = upgradeUser(user, 'MacBook')


    expect(upgradedUserLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop).not.toBe(upgradedUserLaptop.laptop)
    expect(user.address).toBe(upgradedUserLaptop.address)
    expect(user.laptop.title).toBe('ZenBook')

})

test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])


    expect(user).not.toBe(userCopy)
    expect(user.laptop.title).toBe(userCopy.laptop.title)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.books[4]).toBe('ts')
    expect(user.books[5]).toBe('rest api')
})

test('update js to ts', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'react', 'js']
    }

    const userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop.title).not.toBe(userCopy.laptop.title)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.books[2]).toBe('ts')
})

test('remove  js', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js' , 'react']
    }

    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books[3]).toBe('react')
})


test('add company', () => {
    let user: UserWithLaptop & WithCompanies = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        companies:[{ id:1,title:'Epam'},{ id:2,title:'Incubator'}],

    }

    const userCopy = addNewCompanyToUser(user, {id:3,title:'Google'})


    expect(user).not.toBe(userCopy)
    expect(user.companies[1]).toBe('Incubator')
    expect(userCopy.companies[2]).toBe('Google')

})

