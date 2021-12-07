import * as fundingService from "../model/funding.js";
import * as userModel from "../model/user.js";

export async function getFundings(req, res, next) {
  const fundings = await fundingService.getItems();

  res.status(200).json({ ok: true, result: fundings });
}

export async function getFunding(req, res, next) {
  const itemId = req.params.itemId;
  const funding = await fundingService.getItem(itemId);
  res.status(200).json({ ok: true, result: funding });
}

export async function postFunding(req, res, next) {
  try {
    const { title, images, thumbnail, price, targetPrice, content } = req.body;
    const user = res.locals.user;
    await fundingService.createItem({ title, images, thumbnail, price, targetPrice, content, nickname: user.nickname });
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}

export async function updateFunding(req, res, next) {
  try {
    console.log("bye");
    const { itemId } = req.params;
    const { title, images, thumbnail, price, targetPrice, content, nickname } = req.body;
    const user = res.locals.user;
    const funding = await fundingService.getItem(itemId);
    if (funding && funding.nickname == user.nickname) {
      try {
        await fundingService.updateItem(itemId, title, images, thumbnail, price, targetPrice, content, nickname);
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(400).send();
      }
    } else {
      res.status(400).send();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}

export async function deleteFunding(req, res, next) {
  try {
    const { itemId } = req.params;
    const user = res.locals.user;
    const funding = await fundingService.getItem(itemId);
    if (funding && funding.nickname == user.nickname) {
      try {
        await fundingService.deleteItem(itemId);
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(400).send();
      }
    } else {
      res.status(400).send();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}

export async function priceUpdateFunding(req, res, next) {
  try {
    const { itemId } = req.params;
    const user = res.locals.user;
    const funding = await fundingService.getItem(itemId);
    if (funding && funding.nickname == user.nickname) {
      try {
        const { id, point } = user;
        const { price, totalPrice } = funding;
        await fundingService.priceUpdateItem(itemId, price, totalPrice);
        await userModel.pointUpdateUser(id, point, price);
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(400).send();
      }
    } else {
      res.status(400).send();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}
