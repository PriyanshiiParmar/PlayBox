import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    const isMenuOpen = useSelector(state => state.app.isMenuOpen)
    if(!isMenuOpen){
        return null;
    }
    return(
        <div className="p-5 hidden xl:block lg:block shadow-xl w-48 ">
            <ul className="border-b border-gray-500 pb-3">
                <div className="flex items-center">
                    <li><img className="h-10 mr-4" alt="home" src="https://static.vecteezy.com/system/resources/thumbnails/022/013/913/small/home-icon-illustration-image-vector.jpg"/></li>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                </div>
                <div className="flex items-center">
                    <li><img className="h-10 mr-4" alt="shorts" src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"/></li>
                    <li>Shorts</li>
                </div>
                <div className="flex items-center">
                    <li><img className="h-7 mr-6" alt="home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s"/></li>
                    <li>Subscriptions</li>
                </div>
            </ul>
            <h1 className="font-bold pt-4">Subscriptions</h1>
            <ul className="border-b border-gray-500 pb-3">
                <li className="m-1">Upper Float Gaming</li>
                <li className="m-1">Akshay Saini</li>
                <li className="m-1">Pepcoding</li>
                <li className="m-1">Kunal Kushwah</li>
                <li className="m-1">Shinchan</li>
            </ul>
            <h1 className="font-bold pt-4">Watch Later</h1>
            <ul className="border-b border-gray-500 pb-3">
                <li>Upper Float Gaming</li>
                <li>Akshay Saini</li>
                <li>Pepcoding</li>
            </ul>
            <h1 className="font-bold pt-4">Explore</h1>
            <ul className="border-b border-gray-500 pb-3">
                <div className="flex items-center">
                    <li><img className="h-6 mr-4 m-1" alt="home" src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg"/></li>
                    <li>Trending</li>
                </div>
                <div className="flex items-center">
                    <li><img className="h-7 mr-4 m-1" alt="shorts" src="https://www.kindpng.com/picc/m/177-1772005_playstore-icon-free-download-youtube-icon-transparent-background.png"/></li>
                    <li>Shopping</li>
                </div>
                <div className="flex items-center">
                    <li><img className="h-8 mr-3" alt="home" src="https://icons.veryicon.com/png/o/miscellaneous/resume-breakpoint-simple-line-mark/music-435.png"/></li>
                    <li>Music</li>
                </div>
                <div className="flex items-center">
                    <li><img className="h-8 mr-3" alt="home" src="https://cdn-icons-png.flaticon.com/512/7708/7708371.png
"/></li>
                    <li>Gaming</li>
                </div>
                <div className="flex items-center">
                    <li><img className="h-7 mr-2" alt="home" src="https://t4.ftcdn.net/jpg/01/03/95/35/360_F_103953529_PCEL52QBWBkKnoXD2l9ZFNOEcdm5PARf.jpg"/></li>
                    <li>News</li>
                </div>
            </ul>
        </div>
    )
}
export default Sidebar;