const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center p-2 shadow-sm m-2 ">
      <img
        className="h-8 "
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <p className="mx-2 font-bold">{name}</p>
      <p>{text}</p>
    </div>
  );
};
export default ChatMessage;
