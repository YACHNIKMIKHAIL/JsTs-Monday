import {UserType} from "./09_01";

const icreaseAge =
    (u: UserType) => u.age++

test('big reference type test', () => {
    let user = {
        name: 'Misha',
        age: 30,
        address: {
            title: 'Brest'
        }
    }
    icreaseAge(user)

    expect(user.age).toBe(31)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})


test('big array referens test', () => {
    let users = [
        {
            name: 'Misha',
            age: 30
        },
        {
            name: 'Ritka',
            age: 29
        }
    ]


    const admins = users
    admins.push({name: 'Bangugan', age: 10})

    expect(users[2]).toEqual({name: 'Bangugan', age: 10})
})

test('value type test', () => {
    let usersCount = 100


    let adminsCount = usersCount

    adminsCount++

    expect(adminsCount).toEqual(101)
    expect(usersCount).toEqual(100)
})

test('big reference type test2', () => {
    let user: UserType = {
        name: 'Misha',
        age: 30,
        address: {
            title: 'Brest'
        }
    }


    let user2: UserType = {
        name: 'Ritke',
        age: 29,
        address: {
            title: user.address
        }
    }

    user2.address.title = 'california'
    expect(user.address).toBe(user2.address)
    expect(user.address).toBe('california')
})

test('big reference type Array test', () => {
    const address = 'Brest town'
    let user: UserType = {
        name: 'Misha',
        age: 30,
        address: {
            title: address
        }
    }


    let user2: UserType = {
        name: 'Ritke',
        age: 29,
        address: {
            title: address
        }
    }

    const users = [user, user2, {
        name: 'Igor',
        age: 25,
        address: {
            title: address
        }
    }]
    const admins = [user, user2]

    admins[0].name = 'Mikhail'
    expect(user.name).toBe('Mikhail')
    expect(admins[0].name).toBe('Mikhail')
})