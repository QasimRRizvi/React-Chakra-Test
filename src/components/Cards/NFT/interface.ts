interface IImage {
  src: string;
  alt: string;
}

type NFT_TYPE = {
  SALE: 'sale';
  AUCTION: 'auction';
};

export interface INftDetails {
  tags: string[];
  image: IImage;
  id: string;
  name: string;
  likes: number;
  amount: number;
  discount: number;
  endTime: Date;
  type: keyof NFT_TYPE;
}
