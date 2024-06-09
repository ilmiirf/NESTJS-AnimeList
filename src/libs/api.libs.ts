export const getAnimeResponse = async (resource: string, query: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};

export const getNestedAnimeResponse = async (
  resource: string,
  objectProps: string
) => {
  const response = await getAnimeResponse(resource, objectProps);

  return response.data.flatMap((item: any) => item.entry);
};
