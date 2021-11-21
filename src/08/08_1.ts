export const usersArray = [{id: 101, name: 'me'},
    {id: 2312344123, name: 'Vitalya'},
    {id: 1212, name: 'Igor'},
    {id: 1, name: 'Egor'}]

export const usersObj = {
    '0': 'me',
    '1': 'Vitalya',
    '2': 'Igor',
    '3': 'Egor'
}

type UsersType = {
    [key: string]: { id: number, name: string }
}
export let users: UsersType = {
    '101': {id: 101, name: 'me'},
    '2312344123': {id: 2312344123, name: 'Vitalya'},
    '1212': {id: 1212, name: 'Igor'},
    '1': {id: 1, name: 'Egor'}
}
let user = {id: 100500, name: 'Roman'}
users[user.id] = user;
delete users[user.id]

usersArray.find(u => u.id === 1)