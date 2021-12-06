import express from "express";
import * as fundingService from "../model/funding.js";

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
    const { title, images, thumbnail, price, targetPrice, content } = res.body;
    //   res.locals.user 는 아직 모름 주영님이 설정한 방식대로 감
    const user = res.locals.user;
    await fundingService.createItem(title, images, thumbnail, price, targetPrice, content, user);
    res.status(201).json({ ok: true, message: "생성 성공" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: "생성 실패" });
  }
}

export async function updateFunding(req, res, next) {
  try {
    const { itemId } = req.params;
    const { title, images, thumbnail, price, targetPrice, content } = res.body;
    const user = res.locals.user;
    const funding = await fundingService.getItem(itemId);
    if (funding && funding.userId == user.id) {
      try {
        await fundingService.updateItem(itemId, title, images, thumbnail, price, targetPrice, content);
        res.status(201).json({ ok: true, message: "수정 성공" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, msessage: "수정 실패" });
      }
    } else {
      res.status(401).json({ ok: false, msessage: "수정 실패" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: "수정 실패" });
  }
}

export async function deleteFunding(req, res, next) {
  try {
    const { itemId } = req.params;
    const user = res.locals.user;
    const funding = await fundingService.getItem(itemId);
    if (funding && funding.userId == user.id) {
      try {
        await fundingService.deleteItem(itemId);
        res.status(201).json({ ok: true, message: "삭제 성공" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, msessage: "삭제 실패" });
      }
    } else {
      res.status(401).json({ ok: false, msessage: "삭제 실패" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: "삭제 실패" });
  }
}
