import {studentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: studentType;

beforeEach(() => {
        student = {
            id: 1,
            name: 'Mikhail',
            age: 30,
            isActive: false,
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
    }
)

test('new tech skill will be added for student', () => {
        expect(student.tehnologies.length).toBe(3);
        addSkill(student, 'JS');

        expect(student.tehnologies.length).toBe(4);
        expect(student.tehnologies[3].title).toBe('JS');
        expect(student.tehnologies[3].id).toBeDefined()
    }
)

test('student will be ACTIVE', () => {
        expect(student.isActive).toBe(false);
        makeStudentActive(student, true);

        expect(student.isActive).toBe(true);
    }
)

test('student live at city', () => {
        let result1 = doesStudentLiveIn(student, 'Moscow');
        let result2 = doesStudentLiveIn(student, 'Brest');

        expect(result1).toBe(false);
        expect(result2).toBe(true);
    }
)

