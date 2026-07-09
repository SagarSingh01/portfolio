import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

type Account = {
    Name: string;
    Link: string;
    Icon: IconType;
    Size: number;
    Color: string;
}

const Accounts: Account[] = [
    {
        Name: "Github",
        Link: "https://github.com/SagarSingh01",
        Icon: FaGithub,
        Size: 28,
        Color : "#fff"
    },

    {
        Name: "LinkedIn",
        Link: "https://linkedin.com/in/sagar-singh001",
        Icon: FaLinkedin,
        Size: 26,
        Color : "#0A66C2"
    },

    {
        Name: "Email",
        Link: "mailto:sagar12378089@gmail.com",
        Icon: HiOutlineMail,
        Size: 24,
        Color : "#EA4335"
    }
];

export default Accounts;