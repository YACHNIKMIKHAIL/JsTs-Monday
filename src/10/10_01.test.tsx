import {
    addNewBooksToUser,
    makeHairStyle, moveUserToOtherCity,
    moveUserToOtherHouse,
    upgradeUser,
    UserType,
    UserWithBooks,
    UserWithLaptop
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
        books:['html','css','react']
    }
    const movedUser = moveUserToOtherHouse(user, 21)

    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).not.toBe(movedUser.address)
    expect(user.address.house).toBe(22)
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


    expect(upgradedUserLaptop.laptop).toBe('MacBook')
    expect(user.laptop).not.toBe(upgradedUserLaptop.laptop)
    expect(user.address).toBe(upgradedUserLaptop.address)
    expect(user.laptop).toBe('ZenBook')

})

test('add new books to user', () => {
    let user: UserWithLaptop&UserWithBooks = {
        name: 'Misha',
        hair: 100,
        address: {
            city: 'Brest',
            house: 20
        },
        laptop: {
            title: 'ZenBook'
        },
        books:['html','css','react']
    }

    const userCopy = addNewBooksToUser(user, ['ts','rest api'])


    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.books[4]).toBe('ts')
    expect(user.books[5]).toBe('rest api')
})


