import { ICharacterResponse, IPeopleResponse } from "@/entities/characters/api";
import { b } from "msw/lib/glossary-de6278a9";
import { validateActive } from "@reduxjs/toolkit/dist/listenerMiddleware/task";

/**
 * Create map where key is a page number and value is a response data referring to that page.
 * @param totalAmount - total amount of items.
 * @param perPage - items per page.
 * @param itemsBuilder - build result response.
 * @returns Map<page, IPeopleResponse>.
 */
export function createPageItemsMap(
  totalAmount: number,
  perPage: number,
  itemsBuilder?: (
    // eslint-disable-next-line no-shadow
    totalAmount: number,
    // eslint-disable-next-line no-shadow
    perPage: number
  ) => ICharacterResponse[]
): Map<string, IPeopleResponse> {
  const map = new Map<string, IPeopleResponse>()
  const pageAmount = Math.ceil(totalAmount / perPage)

  Array.from({ length: pageAmount }).reduce<typeof map>((cache) => {
    const page = cache.size

    cache.set(String(page + 1), {
      count: totalAmount,
      next: null,
      previous: null,
      results: itemsBuilder(totalAmount, perPage),
    })

    return cache
  }, map)

  return map
}
/**
 * Filter Map<string, IPeopleResponse> result prop by predicate function.
 * @param map - Map<page, IPeopleResponse>.
 * @param filterCallback
 * @returns FlatArray - list of found items
 */

export function filterItemsFromMap(
  map: Map<string, IPeopleResponse>,
  // eslint-disable-next-line no-shadow
  filterCallback: (value: ICharacterResponse) => boolean
): ICharacterResponse[] {
  return Object.values(Object.fromEntries(map.entries()))
    .flatMap((page) => page.results)
    .filter(filterCallback)
}
