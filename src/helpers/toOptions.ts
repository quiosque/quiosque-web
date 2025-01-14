type Objects = {
  id: number
} & {
  [key: string]: string | number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLabel = (item: any): string => {
  return typeof item === "object" && item !== null
    ? (item.label ?? item.name ?? item.title ?? String(item))
    : String(item);
};

export function toOptions(
  collection: Objects[]
): { label: string; value: string}[] {
  return collection.map((item) => {
    const label = getLabel(item);

    return { label, value: String(item.id) };
  });
}
