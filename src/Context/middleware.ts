import { INftDetails } from "../Components/Cards/NFT/interface";

export default class ContextMiddleware {
  static fetchCards() {
    return new Promise<INftDetails[]>((resolve, reject) => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
