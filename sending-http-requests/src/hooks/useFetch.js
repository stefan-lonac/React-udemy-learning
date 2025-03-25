import { useEffect, useState } from "react"

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState()
  const [error, setError] = useState()
  const [fetchData, setFetchData] = useState(initialValue)

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {
        const dataPlaces = await fetchFn()
        setFetchData(dataPlaces)
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data places' })
      }

      setIsFetching(false)
    }

    fetchPlaces()
  }, [fetchFn])

  return {
    isFetching,
    fetchData,
    setFetchData,
    error
  }
}