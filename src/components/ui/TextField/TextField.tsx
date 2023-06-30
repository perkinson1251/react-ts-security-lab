import React, { ChangeEvent } from "react";

import * as S from "./TextField.styles";

interface TextFieldProps {
    type: string;
    value: string;
    placeholder: string;
    onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
    type,
    value,
    placeholder,
    onChange,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, event);
    };

    return (
        <S.TextFieldInput
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default TextField;
