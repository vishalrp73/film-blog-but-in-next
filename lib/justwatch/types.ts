// Providers
export interface Packages {
  android_tv: string;
  fire_tv: string;
  tvos: string;
  tizenos: string;
  webos: string;
  xbox: string;
}

export interface ProviderData {
  deeplink_data: unknown[];
  packages: Packages;
}

export type ProviderID = number;

export enum MonetizationType {
  Buy = 'buy',
  Rent = 'rent',
  Flatrate = 'flatrate',
}

export interface Provider {
  id: ProviderID;
  technical_name: string;
  short_name: string;
  clear_name: string;
  display_priority: number;
  priority: number;
  monetization_types: MonetizationType[];
  icon_url: string;
  icon_blur_hash: string;
  slug: string;
  data: ProviderData;
  addon_packages?: unknown;
  parent_packages?: unknown;
}

// Titles
export interface Scoring {
  provider_type: string;
  value: number;
}

export interface Clip {
  type: string;
  provider: string;
  external_id: string;
  name: string;
}

export interface Offer {
  country: string;
  currency: string;
  element_count?: number;
  jw_entity_id: string;
  package_short_name: ProviderShortNames;
  last_change_date_provider_id?: string;
  last_change_date?: string;
  last_change_difference?: number;
  last_change_percent?: number;
  last_change_retail_price?: number;
  monetization_type: MonetizationType;
  new_element_count: number;
  presentation_type: string;
  provider_id: number;
  retail_price?: number;
  type?: string;
  urls: Urls;
}
export interface Backdrop {
  backdrop_url: string;
  backdrop_blur_hash: string;
}

export interface Fullpaths {
  SEASON_DETAIL_OVERVIEW?: string;
  MOVIE_DETAIL_OVERVIEW?: string;
}

export interface Urls {
  standard_web: string;
  deeplink_web?: string;
}

export interface Credit {
  role: string;
  character_name?: string;
  person_id: number;
  name: string;
}

export interface Externalid {
  provider: string;
  external_id: string;
}

export type TitleID = number;

export interface Title {
  id: TitleID;
  jw_entity_id: string;
  title: string;
  full_path: string;
  full_paths: Fullpaths;
  poster: string;
  poster_blur_hash: string;
  backdrops: Backdrop[];
  short_description: string;
  original_release_year: number;
  object_type: string;
  original_title: string;
  localized_release_date: string;
  offers: Offer[];
  clips: Clip[];
  scoring: Scoring[];
  credits: Credit[];
  external_ids: Externalid[];
  genre_ids: number[];
  age_certification: string;
  runtime: number;
  production_countries: string[];
  cinema_release_date: string;
  permanent_audiences: string[];
}

export type ProviderShortNames =
  | 'nfx' // netflix
  | 'prv' // amazon prime video
  | 'nev' // neon
  | 'dnp' // disney+
  | 'atp' // apple tv+
  | 'mbi' // mubi
  | 'tnz' // tvnz
  | 'shd' // shudder
  // extras: don't really care for, but good to know
  | 'bhd' // broadwayHD
  | 'thn' // threenow
  | 'bmf' // beamafilm
  | 'cla' // classix
  | 'acp'; // amc+
