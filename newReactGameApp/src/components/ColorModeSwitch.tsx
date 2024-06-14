import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <>
        <HStack>
            <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
            {colorMode === "dark" ? <Text>Dark Mode</Text> : <Text>Light Moe</Text>}
        </HStack>
    </>
  )
}

export default ColorModeSwitch