export interface LocationResponse {
  ip: string;
  hostname: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: {
    geoname_id: number;
    capital: string;
    languages: [
      {
        code: string;
        name: string;
        native: string;
      },
    ];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
  time_zone: {
    id: string;
    current_time: string;
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean;
  };
  currency: {
    code: string;
    name: string;
    plural: string;
    symbol: string;
    symbol_native: string;
  };
  connection: {
    asn: number;
    isp: string;
  };
  security: {
    is_proxy: boolean;
    proxy_type: any;
    is_crawler: boolean;
    crawler_name: any;
    crawler_type: any;
    is_tor: boolean;
    threat_level: string;
    threat_types: any;
  };
}
