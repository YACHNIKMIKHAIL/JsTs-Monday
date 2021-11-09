import {splitIntoWirds, sum} from './01'

test('sum should be correct', () => {
    let a: number
    let b: number
    let c: number

    beforeEach(() => {
        a = 1;
        b = 3;
        c = 5;
    })

    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(b, c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('splitting should be correct', () => {
    let a = 'Hello my friend!'
    let b = 'Js is the best programming language.';


    const result1 = splitIntoWirds(a);
    const result2 = splitIntoWirds(b);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('is');
    expect(result2[2]).toBe('the');
    expect(result2[3]).toBe('best');
    expect(result2[4]).toBe('programming');
    expect(result2[5]).toBe('language');
})