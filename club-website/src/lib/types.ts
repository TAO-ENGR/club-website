export type EventType = {date: any, startTime: any, endTime: any, title: String, desc: any}

export type Course = {name: string, description: string, semestersMaterials: SemesterMaterials[]}

export type SemesterMaterials = {accordionValue: string, semester: string, links: Link[]}

export type Link = { displayText: string, url: string}