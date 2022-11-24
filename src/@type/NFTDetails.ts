type NFT_TYPE = {
  SALE: 'sale';
  AUCTION: 'auction';
};

interface IImage {
  src: string;
  alt: string;
}

export interface INFTDetails {
  tags: string[];
  image: IImage;
  id: string;
  name: string;
  likes: number;
  liked: boolean;
  amount: number;
  discount: number;
  endTime: Date;
  type: keyof NFT_TYPE;
}
