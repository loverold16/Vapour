import { useEffect, useState } from "react"
import { APP_KEY, GAME_DETAILS_URL_API } from "../helpers/Api"
import { fetchGamesStore, fetchCustomURL } from "../helpers/ApiService"

export default function StoreList({ gameid }) {
    const [gameStore, setgameStore] = useState([])
    const [gameName, setgameName] = useState([])

    useEffect(() => {
        const storeLinkAPI = `${GAME_DETAILS_URL_API}${gameid}/stores?key=${APP_KEY}`

        fetchCustomURL(storeLinkAPI, (data) => {
            setgameStore(data.results);
        })

        fetchGamesStore((data) => {
            setgameName(data.results)
        })
    }, [])

    const combinedAPI = gameStore.map(item => {
        const find = gameName.find(item2 => item2.id === item.store_id)
        return find ? { ...item, ...find } : item
    });

    console.log(combinedAPI);
    return (
        <>{
            combinedAPI.map((item, id) => (
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a type="button" target="_blank" href={item.url}  className="btn btn-dark mx-1" key={id}>{item.name}</a>
                </div>
            ))
        }
        </>
    )
}