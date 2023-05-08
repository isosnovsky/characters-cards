import {
  Fade,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  SkeletonText,
} from '@chakra-ui/react'

import type { ICharacterCardPreviewSkeletonProps } from './character-card-preview-skeleton.types'

export function CharacterCardPreviewSkeleton({
  count,
}: ICharacterCardPreviewSkeletonProps) {
  return Array.from({ length: count }).map(() => (
    <Fade in>
      <Card bg="radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );">
        <CardHeader>
          <SkeletonText noOfLines={1} skeletonHeight="10" />
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="4" />
          </Stack>
        </CardBody>
      </Card>
    </Fade>
  ))
}
