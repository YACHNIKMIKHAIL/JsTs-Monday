export type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'me'},
        '2312344123': {id: 2312344123, name: 'Vitalya'},
        '1212': {id: 1212, name: 'Igor'},
        '1': {id: 1, name: 'Egor'}
    }
})


test('should updete corresponding users obj', () => {
    users['1'].name = 'Egorka'

    expect(users['1']).toEqual({id: 1, name: 'Egorka'});

})

test('should delete corresponding users obj', () => {
    delete users['1212']

    expect(users['2']).toBeUndefined();

})