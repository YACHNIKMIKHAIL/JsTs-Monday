type  studentType = {
    id: number
    name: string
    age: number
    family: boolean
    hobby: Array<string>
    adress: adressType
    tehnologies: Array<tehType>
}

type adressType = {
    city: string
    street: string
}
type tehType = {
    id: number
    title: string
}
const student: studentType = {
    id: 1,
    name: 'Mikhail',
    age: 30,
    family: true,
    hobby: ["fix bike", "js"],
    adress: {
        city: 'Brest',
        street: 'Gercena'
    },
    tehnologies: [
        {
            id: 1,
            title: 'React'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'TS'
        },
    ]
}