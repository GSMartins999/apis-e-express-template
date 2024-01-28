import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students} from './database'
import { COURSE_STACK, TCourse, TStudens } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//Pegando todos os cursos
app.get('/courses', (req: Request, res: Response) => {
    res.send(courses)
})


//Pesquisando um curso especifico
app.get("/courses/search", (req: Request, res: Response) => {
    const nameToFind = req.query.name as string
    const result: TCourse[] = courses.filter((course) => {
        return course.name.toLowerCase().includes(nameToFind.toLowerCase())
    })

    res.send(result)
})

//Criando um curso

app.post("/courses", (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const lessons = req.body.lessons as number
    const stack = req.body.stack as COURSE_STACK

    const newCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)

    res.status(201).send("Curso registrado com sucesso")
})

//Pegando todos os estudantes 

app.get("/students", (req: Request, res: Response) => {
    res.send(students)
})

//Pegando os estudantes pelo nome
app.get("/students/search", (req: Request, res: Response) => {
    const nameToFind = req.query.name as string
    const result: TStudens[] = students.filter((item) => {
        return item.name.toLowerCase().includes(nameToFind.toLowerCase())
    })
    res.send(result)
})

