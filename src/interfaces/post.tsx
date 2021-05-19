export interface IPost {
  timeStart: Date;
  timeEnd: Date;
  typePost: number;
  user_id: string;
  accommodation: IAccommodation;
}

interface IAccommodation {
  title: string;
  description: Array<string>;
  area: number;
  retail: number;
  person: number;
  typeAccommdation: number;
  address: IAddress;
  images: Array<IImage>;
}

interface IAddress {
  street: string;
  ward: string;
  district: string;
  province: string;
}

interface IImage {
  src: string;
  alt: string;
}
