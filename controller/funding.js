import * as fundingService from "../model/funding.js";
import * as imageService from "../model/image.js";
import * as userModel from "../model/user.js";
import { localFileUrl } from "../utils/image.js";

export async function getFundings(req, res, next) {
  try {
    const fundings = await fundingService.getItems();

    res.status(200).json({ ok: true, result: fundings });
  } catch (error) {
    console.log(error);
    return;
  }
}

// export async function getFunding(req, res, next) {
//   const itemId = req.params.itemId;
//   const funding = await fundingService.getItem(itemId);
//   res.status(200).json({ ok: true, result: funding });
// }

export async function postFunding(req, res, next) {
  try {
    const { title, price, targetPrice, content } = req.body;
    const thumbnail = localFileUrl(req.files.thumbnail[0].filename);
    req.files.images.forEach(async (v) => {
      // Image만들기
      // images.push(localFileUrl(v.filename));
      try {
        await imageService.postImage(localFileUrl(v.filename));
      } catch (error) {
        console.log(error);
        return;
      }
    });
    // const user = res.locals.user;
    await fundingService.createItem({ title, thumbnail, price, targetPrice, content });

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}

// export async function updateFunding(req, res, next) {
//   try {
//     const { itemId } = req.params;
//     const { title, images, thumbnail, content } = req.body;
//     const user = res.locals.user;
//     const funding = await fundingService.getItem(itemId);
//     if (funding && funding.nickname == user.nickname) {
//       try {
//         await fundingService.updateItem(itemId, title, images, thumbnail, content);
//         res.status(204).send();
//       } catch (error) {
//         console.log(error);
//         res.status(400).send();
//       }
//     } else {
//       res.status(400).send();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send();
//   }
// }

// export async function deleteFunding(req, res, next) {
//   try {
//     const { itemId } = req.params;
//     const user = res.locals.user;
//     const funding = await fundingService.getItem(itemId);
//     if (funding && funding.nickname == user.nickname) {
//       try {
//         await fundingService.deleteItem(itemId);
//         res.status(204).send();
//       } catch (error) {
//         console.log(error);
//         res.status(400).send();
//       }
//     } else {
//       res.status(400).send();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send();
//   }
// }

// export async function priceUpdateFunding(req, res, next) {
//   try {
//     const { itemId } = req.params;
//     const user = res.locals.user;
//     const funding = await fundingService.getItem(itemId);
//     const { id, point } = user;
//     const { price, totalPrice, targetPrice } = funding;
//     await fundingService.priceUpdateItem(itemId, price, totalPrice, targetPrice);
//     await userModel.pointUpdateUser(id, point, price);
//     res.status(204).send();
//   } catch (error) {
//     console.log(error);
//     res.status(400).send();
//   }
// }

// export async function getRankingFundings(req, res, next) {
//   const fundings = await fundingService.getRankingItems();

//   res.status(200).json({ ok: true, result: fundings });
// }
