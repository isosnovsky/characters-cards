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
import { useSelector } from 'react-redux'

import { selectCharacterSelector } from '../../model'

import type { ICharacterCardPreviewProps } from './character-card-preview.types'

export function CharacterCardPreview({
  character,
}: ICharacterCardPreviewProps) {
  const cachedCharacter = useSelector(selectCharacterSelector(character.id))
  const { name, height, mass, skinColor, birthYear, id, eyeColor, hairColor } =
    cachedCharacter.isUninitialized ? character : cachedCharacter.data

  return (
    <Fade in>
      <Link to={`/character/${id}`}>
        <Card
          bg="radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );"
          transition="box-shadow 0.4s"
          color="white"
          fontFamily="Jedi"
          height="300px"
          _hover={{
            boxShadow: '4px 8px 20px 1px hsl(216.48deg 71.31% 53.21% / 44%)',
          }}
        >
          <CardHeader>
            <Heading size="md" fontFamily="Jedi">
              {name}
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2">
              <Text fontSize="sm">Birth year: {birthYear}</Text>
              <Text fontSize="sm">Height: {height}</Text>
              <Text fontSize="sm">Mass: {mass}</Text>
              <Text fontSize="sm">Skin color: {skinColor}</Text>
              <Text fontSize="sm">Eye color: {eyeColor}</Text>
              <Text fontSize="sm">Hair color: {hairColor}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Fade>
  )
}
