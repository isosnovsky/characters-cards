import { Fade, Stack, SkeletonText } from '@chakra-ui/react'

export function CharacterCardSkeleton() {
  return (
    <Fade in>
      <Stack>
        <SkeletonText
          startColor="#8e7baf"
          endColor="#24aad1"
          noOfLines={1}
          skeletonHeight="150"
          marginBottom="50px"
        />
        <SkeletonText
          startColor="#8e7baf"
          endColor="#24aad1"
          noOfLines={6}
          skeletonHeight="48px"
        />
      </Stack>
    </Fade>
  )
}
