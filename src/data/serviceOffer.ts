import globe from '../assets/globe.svg'
import server from '../assets/server.svg'
import code from '../assets/code-2.svg'
import smartphone from '../assets/tablet-smartphone.svg'

export type TService = {
    icon: any
    name: string
    summary: string
}

export const services: TService[] = [
    {
        icon: globe,
        name: "Web Development",
        summary: "Have idea for building your startup? lets talk and build your startup web application"
    },
    {
        icon: smartphone,
        name: "Mobile Development",
        summary: "Create beautifull mobile application from your design and make user enjoyable using application"
    },
    {
        icon: code,
        name: "Backend Development",
        summary: "Create cloud service for your application with workflow, database, infrastructure, and documentation your application"
    },
    {
        icon: server,
        name: "Cloud Computing",
        summary: "Have a computer service in cloud, but dont know operating it? lets talk or discussion and serve up your Cloud Computer."
    }
]