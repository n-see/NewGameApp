import useData, { Platform } from "./useData";



//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform:Platform}[]
    metacritic: number
}

export interface FetchGameResponse {
    count: number
    results: Game []
}




const useGames = () => useData<Game>('/games')

export default useGames;