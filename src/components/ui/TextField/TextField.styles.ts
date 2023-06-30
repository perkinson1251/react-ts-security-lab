import styled from "styled-components";
import constants from "styles/constants";

export const TextFieldInput = styled.input`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 2px;
    border: 1px solid ${constants.colors.secondaryElementBlue};
    color: ${constants.colors.secondaryElementBlue};

    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3rem;

    transition: 0.5s;

    &::placeholder {
        color: ${constants.colors.secondaryElementBlue};
    }

    &:focus {
        color: ${constants.colors.textActiveBlue};
        border-color: ${constants.colors.textActiveBlue};
    }

    &:invalid {
        color: ${constants.colors.red};
        border-color: ${constants.colors.red + "4D"};
    }
`;
