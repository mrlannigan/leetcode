export function findContentChildren(g: number[], s: number[]): number {
  const greedSorted = [...g].sort((a, b) => a - b);
  const sizeSorted = [...s].sort((a, b) => a - b);

  let satisfiedChildrenIndex: number | undefined = undefined;
  let childrenSatisfiedCount = 0;

  for (const size of sizeSorted) {
    const startIndex: number =
      satisfiedChildrenIndex !== undefined ? satisfiedChildrenIndex + 1 : 0;
    for (let greedIndex = startIndex; greedIndex < greedSorted.length; greedIndex += 1) {
      if (size >= greedSorted[greedIndex]) {
        // satisfied
        satisfiedChildrenIndex = greedIndex;
        childrenSatisfiedCount += 1;
        break;
      }
    }
  }

  return childrenSatisfiedCount;
}
