import { ListItems } from "../../utils/listItems";
import { v4 as uuidv4 } from 'uuid';
import Link from "../Link/Link";
const NavItems = () => (
    <nav className="navbar">
        <ul className="menu-items"> 
            {ListItems?.map((item, _) => (
                <li className="list-items" key={uuidv4()}>
                    <Link href="#">
                        {item?.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);
export default NavItems;