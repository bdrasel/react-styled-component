import { FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocailIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
    return (
        <StyledSocailIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocailIcons>
    )
}
