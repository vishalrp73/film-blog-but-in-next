import { getTitle } from './getTitle';

export const getStreamingOptions = async (title_id: number) => {
  const film = await getTitle('movie', title_id);
  if (film.offers === undefined) return undefined;

  const opts = film.offers.filter(
    (offer) => offer.monetization_type === 'flatrate',
  );
  // return with duplicates removed from array
  return opts.filter(
    (obj, idx) =>
      opts.findIndex(
        (item) => item.package_short_name === obj.package_short_name,
      ) === idx,
  );
};
