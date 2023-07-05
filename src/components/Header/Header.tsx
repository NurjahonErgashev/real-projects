import { FiPhoneCall } from "react-icons/fi";
import { BsFillGeoAltFill, BsSearch } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import logo from "../../images/site-logo.svg";
import { Link } from "@nextui-org/react"
interface HeaderListProps {
    title: string;
    phoneNumber: string
    phoneNumber2: string
}
const HeaderList: HeaderListProps = {
    title: "г.Ташкент, Чиланзар 10 квартал, дом 3/1",
    phoneNumber: '+998 71 276-62-53',
    phoneNumber2: "+998 71 276-62-54"
}
const Header = () => (
    <header className="header">
        <div className="header-left">
            <div className="phoneAddress__wrapper">
                <div className="address">
                    <div className="address-icon">
                        <BsFillGeoAltFill />
                    </div>
                    <div className="address-text">
                        <h3>
                            {HeaderList?.title}
                        </h3>
                    </div>
                </div>
                <div className="phone">
                    <div className="phone-icons">
                        <FiPhoneCall />
                    </div>
                    <div className="phone-text">
                        <span>{HeaderList.phoneNumber}</span>
                        <span>{HeaderList.phoneNumber2}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="logo">
            <Link href="/">
                <img
                    src={logo}
                    alt="logo"
                />
            </Link>
        </div>
        <div className="header-right">
            <div className="search-icon">
                <BsSearch />
            </div>
            <div className="facebook-container">
                <div className="facebook-icon">
                    <RiFacebookFill />
                </div>
                <span>
                    Мы на Facebook
                </span>
            </div>
            <div className="language-container">
                <select>
                    <option value="russian">Русский</option>
                </select>
            </div>
        </div>
    </header>
);
export default Header;
