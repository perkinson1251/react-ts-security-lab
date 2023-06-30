import React, { MouseEvent } from "react";

import * as S from "./Button.styles";

interface ButtonProps {
    variation: "main" | "secondary" | "transparent";
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick: (
        event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>,
    ) => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variation,
    type,
    disabled,
    onClick,
    children,
}) => {
    const handleClick = (
        event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>,
    ) => {
        onClick(event);
    };

    return (
        <S.Button
            type={type}
            onClick={handleClick}
            variation={variation}
            disabled={disabled}
        >
            {children}
        </S.Button>
    );
};

export default Button;
