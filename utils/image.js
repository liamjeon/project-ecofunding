import { config } from "../configuration/config.js";

export function localFileUrl(filename) {
  return config.uploader.host + "/" + filename;
}
