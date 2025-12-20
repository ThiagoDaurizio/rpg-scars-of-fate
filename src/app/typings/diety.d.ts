export type TypedDiety = {
  id: number
  name: string
  title: string
  alignment: string
  description: string
  body: string
  followers: TypedFollower[]
  dogmas: TypedDogma[]
}[]

export type TypedFollower = {
  classe: string
  classe_path: string
  description: string
}

export type TypedDogma = {
  title: string
  body: string
}