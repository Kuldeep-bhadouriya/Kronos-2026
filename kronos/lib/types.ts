export interface Coordinator {
  name: string
  role: string
  avatar: string
  phone: string
  email: string
}

export interface Event {
  id: string
  title: string
  description: string
  image: string
  date: string
  venue: string
  startTime?: string
  endTime?: string
  timing?: string
  category: "tech" | "non-tech"
  coordinator: Coordinator
  registerLink: string
}

