import { localFileUrl } from "../utils/image.js";

// export class PostFundingData {
//   constructor(title, content, price, targetPrice, reqFiles) {
//     this.title = title;
//     this.content = content;
//     if (!reqFiles.thumbnail || req.Files.thumbnail[0].filename.split(".")[1] !== "jpg" || req.Files.thumbnail[0].filename.split(".")[1] !== "png") {
//       throw new Error("썸네일 파일 조건과 일치하지 않습니다");
//     }
//     if (!reqFiles.thumbnail || req.Files.thumbnail[0].filename.split(".")[1] !== "jpg" || req.Files.thumbnail[0].filename.split(".")[1] !== "png") {
//       throw new Error("썸네일 파일 조건과 일치하지 않습니다");
//     }
//   }
// }

export class UpdateFundingData {
  constructor(title, content, reqFiles) {
    this.title = title;
    this.content = content;
    if (reqFiles.thumbnail) {
      this.thumbnail = localFileUrl(reqFiles.thumbnail[0].filename);
    }
    if (reqFiles.images) {
      this.images = [];
      reqFiles.images.forEach((v) => {
        this.images.push(localFileUrl(v.filename));
      });
    }
  }
}
