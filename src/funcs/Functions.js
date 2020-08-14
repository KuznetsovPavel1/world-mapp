export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value === [] ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const addClass = (elems, className) => {
  if (!isEmpty(elems) && elems?.length > 0) {
    elems.forEach((elem) => elem?.classList?.add(className));
  }
};

export const removeClass = (elems, className) => {
  if (!isEmpty(elems) && elems?.length > 0) {
    elems.forEach((elem) => elem?.classList.remove(className));
  }
};
