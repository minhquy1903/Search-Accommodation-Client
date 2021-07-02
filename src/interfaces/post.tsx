export interface IPost {
  timeStart: Date | null;
  timeEnd: Date | null;
  typePost: number;
  user_id: string;
  status: Number;
  accommodation: IAccommodation;
  _id: string;
}

interface IAccommodation {
  title: string;
  description: Array<string>;
  area: number;
  retail: number;
  typeAccommdation: number;
  address: IAddress;
  images: Array<IImage>;
}

export interface IAddress {
  street: string;
  ward: string;
  district: string;
  province: string;
}

export interface IImage {
  src: string;
  alt: string;
}
