export async function api() {
  return new Promise((resolve) => setTimeout(() => resolve("ok"), 1000));
}
