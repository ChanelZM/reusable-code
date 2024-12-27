export function setItem<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T = any>(key: string): T | null {
  if (typeof window === "undefined") return null;
  const stringedValue = window.localStorage.getItem(key);
  if (stringedValue === null) return null;
  try {
    return JSON.parse(stringedValue) as T;
  } catch {
    return null;
  }
}

export function removeItem(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
}
