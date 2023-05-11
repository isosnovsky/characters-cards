import { type ButtonProps, Button } from '@chakra-ui/react'
import { Link as RRLink, useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

export function BackButton(props: ButtonProps) {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(-1)}
      as={RRLink}
      width="100%"
      textAlign="center"
      size="lg"
      fontSize={[16, 32]}
      background="transparent"
      fontFamily="Jedi"
      borderStyle="solid"
      borderWidth="5px"
      sx={{
        'border-image-source':
          'linear-gradient(280deg,  #b7629a 0%, #e73c7e  51%, #23a6d5  70%, #31a3d3  100%)',
        'border-image-slice': '1',
      }}
      _hover={{
        background: 'none',
      }}
      {...props}
    >
      <ArrowBackIcon marginRight="20px" />
      BACK
    </Button>
  )
}
