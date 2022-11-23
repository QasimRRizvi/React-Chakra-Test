import { INftDetails } from "../../components/Modals/nft/interface";

export const NFT_DETAILS: INftDetails[] = [
  {
    tags: ["Hot Deal", "AUCTION"],
    image: {
      src: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
      alt: "Innocent Monkey",
    },
    id: "B8/457843",
    name: "Enoch Citizen",
    likes: 92,
    amount: 260,
    discount: 0,
    endTime: new Date(),
  },
  {
    tags: ["Hot Deal", "Sale"],
    image: {
      src: "https://images.wsj.net/im-491396?width=700&height=700",
      alt: "Captain Monkey",
    },
    id: "B8/457843",
    name: "Enoch Citizen",
    likes: 92,
    amount: 300,
    discount: 15,
    endTime: new Date(),
  },
];
