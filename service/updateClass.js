import { localFileUrl } from "../utils/image.js";

export default class UpdateData {
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
