const priceReg = /^[0-9]*$/;

// 빈값허용x
const titleValidate = (title) => title !== "" && title !== null;

// 숫자만
const priceValidate = (price) => priceReg.test(price);

const targetPriceValidate = (price, targetPrice) => Number(price) * 100 <= Number(targetPrice) && priceReg.test(price);

const thumbnailValidate = (thumbnail) => {
  if (!thumbnail) {
    return false;
  }
  const filenameList = thumbnail[0].filename.split(".");
  const fileForm = filenameList[filenameList.length - 1];
  if (fileForm !== "jpg" && fileForm !== "png") {
    return false;
  }
  return true;
};

const imagesValidate = (images) => {
  if (!images) {
    return false;
  }
  for (const image of images) {
    const filenameList = image.filename.split(".");
    const fileForm = filenameList[filenameList.length - 1];
    if (fileForm !== "png" && fileForm !== "jpg") {
      return false;
    }
  }
  return true;
};

export const thumbnailAndImagesValidate = (reqFiles) => {
  const { thumbnail, images } = reqFiles;
  if (!thumbnailValidate(thumbnail)) {
    throw new Error("썸네일 파일형식에 맞지않습니다");
  }
  if (!imagesValidate(images)) {
    throw new Error("이미지 파일형식에 맞지않습니다");
  }
  return reqFiles;
};

export const fundingPostValidate = (reqBody) => {
  const { title, price, targetPrice, content } = reqBody;
  if (!titleValidate(title)) {
    throw new Error("제목 조건에 맞지않습니다");
  }
  if (!priceValidate(price)) {
    throw new Error("가격 조건에 맞지 않습니다");
  }
  if (!targetPriceValidate(price, targetPrice)) {
    throw new Error("목표가격 조건에 맞지 않습니다");
  }
  if (!titleValidate(content)) {
    throw new Error("내용 조건에 맞지 않습니다");
  }
  return reqBody;
};

export const fundingUpdateValidate = (reqBody) => {
  const { title, content } = reqBody;
  if (!titleValidate(title)) {
    throw new Error("제목 조건에 맞지않습니다");
  }
  if (!titleValidate(content)) {
    throw new Error("내용 조건에 맞지 않습니다");
  }
  return reqBody;
};
