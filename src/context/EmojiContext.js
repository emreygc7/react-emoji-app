import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const emojiContext = createContext()

const EmojiContext = ({ children }) =>{ 

    const [emojiList, setEmojiList] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [query, setQuery] = useState("")

    useEffect(() => {

        const getEmojiList = async () => { 
            const baseUrl = `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_API_KEY}`
            const response = await axios.get(baseUrl)
            setEmojiList(response.data) 
            setIsLoaded(!isLoaded)
        }
        getEmojiList()

    },[])

    const emojiData = {
        emojiList,
        isLoaded,
        query,
        setQuery
    }

    return(
        <emojiContext.Provider value={emojiData} >
            {children}
        </emojiContext.Provider>
    )
}

export default EmojiContext;