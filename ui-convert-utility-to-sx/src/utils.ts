export const getObjectProperty = (object: any, keyPath: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduce(
    (baseObj: any, key: any) => baseObj && baseObj[key],
    object
  );
};

export const setObjectKeyValue = (obj: any, keys: any, value: any) => {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  let current = obj;
  keys?.forEach((key: any, index: number) => {
    if (index === keys?.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  });
  return obj;
};

export const getObjectParentProperty = (
  obj: any,
  key: any,
  prevKey: any = ''
) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key) {
        return prevKey;
      }
      if (obj[prop] && typeof obj[prop] === 'object') {
        const result: any = getObjectParentProperty(obj[prop], key, prop);
        if (result) {
          return result;
        }
      }
    }
  }
  return null;
};
