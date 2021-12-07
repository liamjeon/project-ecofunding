export function buyItemCalculator(price, totalPrice) {
  return price + totalPrice;
}

export function buyItemPercentCalculator(totalPrice, targetPrice) {
  return totalPrice / targetPrice;
}

export function buyUserCalculator(price, point) {
  const newPoint = point - price;
  if (newPoint <= 0) {
    throw new Error("유저의 포인트가 부족합니다");
  }
  return newPoint;
}

// export function percentCalculator(price, totalPrice, targetPrice) {}
