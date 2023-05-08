import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Text,
  Fade,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import type { ICharacterCardPreviewProps } from './character-card-preview.types'

export function CharacterCardPreview(props: ICharacterCardPreviewProps) {
  const {
    name,
    height,
    mass,
    skin_color,
    birth_year,
    id,
    eye_color,
    hair_color,
  } = props.character

  return (
    <Fade in>
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
            <Stack spacing="4">
              <Text fontSize="sm">Birth year: {birth_year}</Text>
              <Text fontSize="sm">Height: {height}</Text>
              <Text fontSize="sm">Mass: {mass}</Text>
              <Text fontSize="sm">Skin color: {skin_color}</Text>
              <Text fontSize="sm">Eye color: {eye_color}</Text>
              <Text fontSize="sm">Hair color: {hair_color}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Fade>
  )
}
