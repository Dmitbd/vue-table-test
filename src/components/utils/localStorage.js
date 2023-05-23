export function saveData (key, data) {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(key, serializedData)
  } catch (error) {
    console.error(`Error saving data to localStorage: ${error}`)
  }
}

export function loadData (key, defaultValue = null) {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData === null) {
      return defaultValue
    }
    return JSON.parse(serializedData)
  } catch (error) {
    console.error(`Error loading data from localStorage: ${error}`)
    return defaultValue
  }
}
