const configuredBase = import.meta?.env?.VITE_API_BASE_URL
const defaultBase = (typeof window !== "undefined" && window.location && window.location.origin) || "http://localhost:3000"

export const API_BASE_URL = configuredBase || defaultBase
export const isSameOriginApi = API_BASE_URL === defaultBase

export function getApiUrl(path) {
  if (!path) return API_BASE_URL
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  if (isSameOriginApi) return path
  if (path.startsWith("/")) return `${API_BASE_URL}${path}`
  return `${API_BASE_URL}/${path}`
}


