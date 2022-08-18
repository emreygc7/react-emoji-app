import { useContext } from "react";
import { emojiContext } from "../context/EmojiContext";
import ReactLoading from "react-loading";
import { toast } from "react-hot-toast";
import "../styles/main.css";

const Emoji = () => {
  
  const { emojiList, isLoaded, query } = useContext(emojiContext);

  return (
    <div className="emoji-container">
      {isLoaded == true ? (
        emojiList
          .filter((emoji) => emoji.unicodeName.toLowerCase().includes(query))
          .map((emoji) => (
            <span
              onClick={() => {
                navigator.clipboard.writeText(emoji.character);
                toast.success("Copied.");
              }}
              key={emoji.slug}
              className="emojis"
            >
              {emoji.character}
            </span>
          ))
      ) : (
        <ReactLoading type={'bubbles'} height={"100px"} width={"100px"} color="white" />
      )}
    </div>
  );
};

export default Emoji;