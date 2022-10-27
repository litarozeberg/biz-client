import { FunctionComponent } from "react";

interface FooterProps {
myName: string;    
}
 
const Footer: FunctionComponent<FooterProps> = ({myName}) => {

    return ( <>
    <div className="text-light text-center bg-primary py-2"> {myName} 2022 - all right reserved 
    <br />
    <i className="fa-brands fa-linkedin"></i>
    <i className="fa-brands fa-github"></i>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-instagram"></i>
    </div>
    </> );
}
 
export default Footer;