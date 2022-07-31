import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading sx={{
        textAlign: 'center',
        mt: '100px',
        bgGradient: 'linear(to-r, pink.500, blue.300)',
        bgClip: 'text',
        fontWeight: '700'
    }}>
        Todo Application
    </Heading>
  )
}

export default Header