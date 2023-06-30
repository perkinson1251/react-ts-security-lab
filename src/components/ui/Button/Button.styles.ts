import styled, { css } from "styled-components";
import constants from "styles/constants";

interface ButtonProps {
    variation: "main" | "secondary" | "transparent";
    disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 10px 12px;
    gap: 10px;
    border-radius: 2px;

    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: -0.75px;
    cursor: pointer;

    transition: 0.5s;

    ${({ variation }) => {
        switch (variation) {
            case "main":
                return css`
                    background-color: ${constants.colors.textActiveBlue};
                    color: ${constants.colors.lightGrey};

                    &:hover {
                        opacity: 0.7;
                    }

                    &:disabled {
                        cursor: auto;
                        opacity: 0.4;
                    }
                `;
            case "secondary":
                return css`
                    background-color: ${constants.colors.secondaryElementBlue};
                    color: ${constants.colors.textActiveBlue};

                    &:hover {
                        background-color: ${constants.colors.textActiveBlue};
                        color: ${constants.colors.lightGrey};
                        opacity: 0.7;
                    }

                    &:disabled {
                        background-color: ${constants.colors
                            .secondaryElementBlue};
                        color: ${constants.colors.secondaryElementBlue};
                        cursor: auto;
                        opacity: 0.4;
                    }
                `;
            case "transparent":
                return css`
                    background-color: transparent;
                    color: ${constants.colors.textActiveBlue};

                    &:hover {
                        background-color: ${constants.colors
                            .secondaryElementBlue};
                        color: ${constants.colors.textActiveBlue};
                        opacity: 0.7;
                    }

                    &:disabled {
                        color: ${constants.colors.secondaryElementBlue};
                        cursor: auto;
                        opacity: 0.4;
                    }
                `;
        }
    }}
`;
