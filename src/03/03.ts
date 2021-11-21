import {student, studentType} from "../02/02";

export const addSkill = (student: studentType, skill: string) => {
    student.tehnologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: studentType, isActive: boolean) => {
    student.isActive = true;
}
export const doesStudentLiveIn= (student: studentType, ciyName: string) => {
    return student.adress.city === ciyName;
}
