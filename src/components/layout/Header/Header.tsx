import { SecurityLabASCII } from "assets/ASCII";

import * as S from "./Header.styles";

const Header: React.FC = () => {
    return (
        <S.HeaderContainer>
            <SecurityLabASCII />
            <S.HeaderInnerContainer>1 2 3 4 5 6</S.HeaderInnerContainer>
        </S.HeaderContainer>
    );
};

export default Header;
