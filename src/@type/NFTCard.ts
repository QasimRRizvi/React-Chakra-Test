import { INFTDetails } from './NFTDetails';

export interface INFTCard {
  data: INFTDetails;
}

export interface INFTCardFooter {
  isAuction: boolean;
}
