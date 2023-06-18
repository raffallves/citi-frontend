import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useFile(key) {
    const { data, error, isLoading } = useSWR(`${key}`, fetcher)

    return {
        file: data,
        isLoading,
        isError: error
    }
}

async function fetchFiles(url, { arg }) {
    await fetch(url, {
        method: 'POST',
    })
}