import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { ICharacterCardPreviewProps } from './character-card-preview.types'

export function CharacterCardPreview(props: ICharacterCardPreviewProps) {
  const { name, height, mass, skin_color, id } = props.character

  return (
    <Link to={`/character/${id}`}>
      <Card
        bg="radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );"
        transition="box-shadow 0.4s"
        color="white"
        _hover={{
          boxShadow: '4px 8px 20px 1px hsl(216.48deg 71.31% 53.21% / 44%)',
        }}
      >
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Text pt="2" fontSize="sm">
                Height: {height}
              </Text>
              <Text pt="2" fontSize="sm">
                Mass: {mass}
              </Text>
              <Text pt="2" fontSize="sm">
                Skin color: {skin_color}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  )
}
