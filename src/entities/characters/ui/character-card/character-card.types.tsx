import { Character } from '../../model'

export type ICharacterCardProps = {
  character: Character
  onChangeAttribute: (key: string, value: string) => void
}
