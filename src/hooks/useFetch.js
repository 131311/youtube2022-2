import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url, initValue) => {
  const [data, setData] = useState(initValue === undefined ? [] : initValue)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return {
    data,
    error,
    loading,
    reFetch: fetchData,
  }
}

export default useFetch
