interface IImage {
  src: string;
  alt: string;
}

export interface INftDetails {
  tags: string[];
  image: IImage;
  id: string;
  name: string;
  likes: number;
  amount: number;
  discount: number;
  endTime: Date;
}
