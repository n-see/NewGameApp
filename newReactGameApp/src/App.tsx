import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)


  return (
    <>
    {/* Create a responsive layout with Chakra UI Grid */}
    {/* Nav, aside, main _______ responsive fro desktop and mobile */}
    <Grid templateAreas={{
      base:`'nav' 'main'`,
      lg:`'nav nav' 'aside main'`//1024 screen size
    }}>
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside'>
          {" "}
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre) }/>
        </GridItem>

      </Show>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App