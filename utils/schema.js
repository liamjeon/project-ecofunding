export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toHexString();
  });

  schema.set("toJSON", {
    virtuals: true,
  });
}

// export function usePercent(schema) {
//   schema.virtual("percent").get(function () {
//     return this.totalPrice / this.targetPrice;
//   });

//   schema.set("toJSON", {
//     virtuals: true,
//   });
// }
