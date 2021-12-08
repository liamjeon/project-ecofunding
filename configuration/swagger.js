import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API",
    description: "hanghae6W API",
  },
  host: "localhost:3000", // swagger.js는 어차피 만들어줄때만 쓰니까 배포해도 여긴 수정 안해도 됨.
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  //   "./router/user.js",
  //   "./router/comment.js",
  //   "./router/item.js",
  "./app.js",
];
// endpointsFiles는 router들 모여있는 최종파일만 넣어야함

swaggerAutogen()(outputFile, endpointsFiles, doc);
