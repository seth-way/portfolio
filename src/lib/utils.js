import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getIndex(_, index) {
  return index;
}

export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// HP utils
export function trackTraveler(path, duration) {
  const totalLength = path.getTotalLength();
  const increments = 100;
  const interval = totalLength / increments;

  const travelerData = [];

  for (let i = 0; i < increments; i++) {
    const distance = i * interval;

    const point = path.getPointAtLength(distance);

    const nextPoint = path.getPointAtLength(distance + 0.1);
    const angle =
      Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
      (180 / Math.PI);

    travelerData.push({
      x: point.x.toFixed(2),
      y: point.y.toFixed(2),
      rotate: angle.toFixed(2),
    });
  }

  const delays = getDelays(duration);

  travelerData.forEach((entry, idx) => {
    entry.delay = delays[idx];
  });

  return travelerData;
}

const delayReducer = (acc, val, idx, arr) => {
  const prev = arr[idx - 1] || 0;
  acc.push(val - prev);
  return acc;
}

function getDelays(duration) {
  const oneHundredElements = new Array(100);
  const intervals = getIntervals(oneHundredElements).sort((a, b) => a - b);
  return intervals.reduce(delayReducer, []).map(del => del * duration * 1000);
}

function getIntervals(arr, min = 0, max = 1, result = []) {
  if (arr.length === 0) return result;

  if (arr.length === 1) {
    result.push((min + max) / 2);
    return result;
  }

  const midIndex = Math.floor(arr.length / 2);

  const offset = (max - min) / 10 - Math.random() * ((max - min) / 5);
  const mappedValue = (min + max) / 2 + offset;

  result.push(mappedValue);

  getIntervals(arr.slice(0, midIndex), min, mappedValue, result);
  getIntervals(arr.slice(midIndex + 1), mappedValue, max, result);

  return result;
}
