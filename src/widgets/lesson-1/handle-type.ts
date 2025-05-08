import {
  handleBoolean,
  handleNumber,
  handleArray,
  handleString,
} from "./handlers";


export const handleType = (param: unknown) => {
  const paramType = typeof param;

  if (paramType === 'string') {
    return handleString(param);
  }

  if (paramType === 'number') {
    return handleNumber(param);
  }

  if (paramType === 'boolean') {
    return handleBoolean(param);
  }

  if (Array.isArray(param)) {
    return handleArray(param);
  }

  return null;
}
