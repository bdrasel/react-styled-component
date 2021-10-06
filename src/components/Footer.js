import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                {/* <img src="./images/logo_white.svg" alt="logo_white" /> */}
               <h1> codewithrasel</h1>

                <Flex>
                <ul>
                    <li>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                       eiusmod tempor incididunt
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>example@codewithrasel.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2021 codewithrasel. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
