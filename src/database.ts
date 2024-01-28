import { COURSE_STACK, TCourse, TStudens } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students: TStudens[] = [
    {
        id: "a001",
        name: "Ana",
        age: 24,
    },
    {
        id: "a002",
        name: "Giovanni",
        age: 24,
    },
   
]