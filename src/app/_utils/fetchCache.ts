const CACHE_DURATION = 1000 * 60 * 60; // 60 minutes

const getFromCache = (url: string) => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const cacheData = sessionStorage.getItem(`cache_${url}`);
    if (cacheData) {
      const { data, timestamp } = JSON.parse(cacheData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log(`Cache hit for ${url}`);
        return data;
      }
    }
    return null;
  } catch (e) {
    console.warn("Cache retrieval failed:", e);
    return null;
  }
};
const setToCache = (url: string, data: any) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sessionStorage.setItem(
      `cache_${url}`,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch (e) {
    console.warn("Cache storage failed:", e);
  }
};

export async function cachedFetch(url: string) {
  const cachedData = getFromCache(url);
  if (cachedData) return cachedData;

  console.log(`Fetching fresh data for ${url}`);
  const response = await fetch(url);
  const data = await response.json();

  setToCache(url, data);
  return data;
}
