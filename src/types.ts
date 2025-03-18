export interface Image {
  id: number; // 48513790
  src: string; // https://picsum.photos/seed/48513790/{width}/{height}
  templated: boolean | string;
}

export type Avatar = {
  src: string;
  templated: boolean;
};

export type Creator = {
  username: string; // "clinton"
  avatar: Avatar;
};

// "https://tourpic-vector.maps.komoot.net/r/big/%7Dk_%5E%7Dj%7BBPEJl@x@VA_AJSH%7D@LKR%7D@l@GPu@RHFk@AHGGEmAn@e@BSKKEFFIDb@FKLb@c@VJn@j@DDj@Jg@b@DAa@%5CEL%5Dd@%5CdC_Dx@@FxAtAfEBrB%5EdBYNw@CHzA%7D@hAKZaBYoAv@e@sBO%5Ek@Va@v@c@Jm@OXoC%7DEeBKm@QB/"
//preview => "https://tourpic-vector.maps.komoot.net/r/small/%7Dk_%5E%7Dj%7BBPEJl@x@VA_AJSH%7D@LKR%7D@l@GPu@RHFk@AHGGEmAn@e@BSKKEFFIDb@FKLb@c@VJn@j@DDj@Jg@b@DAa@%5CEL%5Dd@%5CdC_Dx@@FxAtAfEBrB%5EdBYNw@CHzA%7D@hAKZaBYoAv@e@sBO%5Ek@Va@v@c@Jm@OXoC%7DEeBKm@QB/"
export type VectorMapImage = {
  src: string;
  attribution: string;
};

export interface Tour {
  id: number; //20307720130000
  name: string; // "My strict adventure"
  status: string; // "public"
  date: string;
  distance: number;
  time_in_motion: number;
  elevation_up: number;
  elevation_down: number;
  creator: Creator;
  display_name: string; //"Clinton Tromp"
  is_premium: boolean | string;
  images: Image[];
  vector_map_image: VectorMapImage;
  vector_map_image_preview: VectorMapImage;
}

export interface TourData {
  time_in_motion: number;
  distance: number;
  elevation_down: number;
  elevation_up: number;
}

export interface TourMetric {
  icon: string;
  metric: string;
}
