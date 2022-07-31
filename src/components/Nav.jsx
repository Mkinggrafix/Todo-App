import { useColorMode, IconButton, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav = () => {
    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box sx={{
        w: 100,
        pos: 'fixed',
        top: 0,
        right: 0,
        p: '15px'
    }}>
        <IconButton onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} />
    </Box>
  )
}

export default Nav