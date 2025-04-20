import Home from '../assets/home.svg';
import Saved from '../assets/bookmark.svg';
import Upgrade from '../assets/rocket.svg';

export const LeftSideBottomList = () =>{
    return (
        <div className="lowerSide">
            <div className="listItems">
                <img src={Home} alt="" className="listItemsImg"/>Home
            </div>
            <div className="listItems">
                <img src={Saved} alt="" className="listItemsImg"/>Saved
            </div>
            <div className="listItems">
                <img src={Upgrade} alt="" className="listItemsImg"/>Upgrade to Pro
            </div>
        </div>
    )
}