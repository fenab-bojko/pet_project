export interface ISetAnswer {
    answer: string,
    question: string,
    language: string,
    skill: string
}

export interface IClient {
    host: string,
    port: number,
    database: string,
    user: string,
    password: string,
    connect: () => void
}