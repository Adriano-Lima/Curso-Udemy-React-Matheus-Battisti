import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //refatorando post 
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false) ///utilizado para indicar que acrescentamos novos dados, e assim disparar fetchData 

    //loading
    const [loading, setLoading] = useState(false)

    //tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const resp = await fetch(url)
                const json = await resp.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])
   
    //refatorando post 
    useEffect(() => {
        if (method === "POST") {
            const httpRequest = async () => {
                let fetchOptions = [url, config]
                const resp = await fetch(...fetchOptions)
                const json = resp.json()
                setCallFetch(json)
            }
            httpRequest()
        }
    }, [config, method, url])
    return { data, httpConfig, loading, error }
}

export default useEffect