import { useContext } from 'react'
import { emojiContext } from '../context/EmojiContext'

const Search = () => {

    const { setQuery } = useContext(emojiContext) 

  return (
    <input placeholder='Search some emoji..' type="text" onChange={e => setQuery(e.target.value)} />
  )
}

export default Search