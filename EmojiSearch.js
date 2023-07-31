import React ,{useState} from 'react'
import './EmojiSearch.css';
const emojiData=[
    {
        id:1,
        symbol: "😊",
        name:"smiling face with smiling eyes"
    },
    {
        id:2,
        symbol: "😀",
        name:"grinning face"
    },
    {
        id:3,
        symbol: "😋",
        name:"face savoring food"
    },
    {
        id:4,
        symbol: "🥲",
        name:"smiling face with tears"
    },
    {
        id:5,
        symbol: "🤗",
        name:"smiling face with open hands"
    },
    {
        id:6,
        symbol: "😐",
        name:"neutral face"
    },
    {
        id:7,
        symbol: "🥱",
        name:"yawning face"
    },
    {
        id:8,
        symbol: "💞",
        name:"revolving hearts"
    },
    {
        id:9,
        symbol: "💔",
        name:"broken heart"
    },
    {
        id:10,
        symbol: "💟",
        name:"heart decoration"
    }
]
function EmojiSearch() {

    const [searchEmoji,setSearchEmoji] =useState("");

    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });

  return (
    <div>
        <div className='Main'>
        <h1>React Emoji App!!!</h1>
        <input type='text' placeholder='Search for the emoji...' value={searchEmoji} onChange={handleChange} />
        <div className='emoji'>{
        showEmoji.map((emoji)=>emoji.symbol)
        }</div>
        </div>
    </div>
  )
}

export default EmojiSearch