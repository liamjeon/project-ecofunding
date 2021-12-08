import { returnFullDate, returnGapDate } from "./date.js";

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

export function useFullDate(schema) {
  schema.virtual("date").get(function () {
    return returnFullDate(this.rawDate);
  });

  schema.set("toJSON", {
    virtuals: true,
  });
}

export function useGapDate(schema) {
  schema.virtual("date").get(function () {
    const nowDate = new Date();
    return returnGapDate(nowDate, this.rawDate);
  });

  schema.set("toJSON", {
    virtuals: true,
  });
}
