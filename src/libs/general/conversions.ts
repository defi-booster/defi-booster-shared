export function conversions_BigIntsToStrings(obj: any): any {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    return obj.map(conversions_BigIntsToStrings);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        conversions_BigIntsToStrings(value),
      ])
    );
  }
  return obj;
}
