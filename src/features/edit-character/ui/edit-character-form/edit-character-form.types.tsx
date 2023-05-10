import { Character } from '@/entities/characters'

export type IEditCharacterFormProps = {
  character: Character
  onChangeAttribute: (character: Character) => void
}
