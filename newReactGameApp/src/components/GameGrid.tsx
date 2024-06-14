//All our imports we need

import { useEffect, useState } from "react"
import apiClient from "../Services/apiClient"
import { Text } from "@chakra-ui/react"


//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
interface Game {
    id: number
    name: string
}

interface FetchGameResponse {
    count: number
    result: Game []
}

const GameGrid = () => {

//We need our UseState to help us render update our UI with our games and others
const [games, setGames] = useState<Game[]>([])
const [error, setError] = useState()


//Create a helper function to help us fetch our code

const fetchGames = () => {
    apiClient.get('/games')
    .then(response => setGames(response.data.results))
    .catch(error => {
        setError(error.message);
    })
}

//UseEffect to fetch our data

useEffect(() => {
    fetchGames()
}, [])


//We other helper function to add, delete or update data

  return (
    <>
    {/* Display our data ul li grid table usually map it with unique key  */}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid