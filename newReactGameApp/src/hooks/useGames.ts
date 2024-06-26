import { GameQuery } from "../App";
import useData, { Platform } from "./useData";
import { Genre } from "./useGenres";



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




const useGames = (gameQuery:GameQuery) => useData<Game>('/games',{params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id}},[gameQuery])

export default useGames;