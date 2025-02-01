const Comment = ({data}) =>{
    const {name, text, replies} = data
    return(
        <div className="my-2">
            <div className="flex shadow-md bg-gray-100 p-2 rounded-2xl">
            <img className="h-12 mr-2 " alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm">{text}</p>
            </div>
            </div>
        </div>
    )
}
export default Comment;