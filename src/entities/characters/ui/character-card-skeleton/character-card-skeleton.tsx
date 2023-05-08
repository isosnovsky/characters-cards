import { Stack, SkeletonText } from '@chakra-ui/react'

export function CharacterCardSkeleton() {
  return (
    <Stack>
      <SkeletonText noOfLines={1} skeletonHeight="150" fadeDuration={1} />
      <SkeletonText noOfLines={1} skeletonHeight="50" fadeDuration={1} />
      <SkeletonText noOfLines={1} skeletonHeight="50" fadeDuration={1} />
      <SkeletonText noOfLines={1} skeletonHeight="50" fadeDuration={1} />
      <SkeletonText noOfLines={1} skeletonHeight="50" fadeDuration={1} />
      <SkeletonText noOfLines={1} skeletonHeight="50" fadeDuration={1} />
    </Stack>
  )
}
