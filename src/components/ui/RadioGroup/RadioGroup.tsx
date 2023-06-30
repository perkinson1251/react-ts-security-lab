import { useState } from "react";

import * as S from "./RadioGroup.styles";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
    options,
    defaultValue,
    disabled = false,
    onChange,
}) => {
    const [value, setValue] = useState<string>(defaultValue || "");

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <S.RadioGroupContainer>
            {options.map((option) => (
                <S.RadioOptionContainer key={option.value}>
                    <S.RadioInput
                        type="radio"
                        value={option.value}
                        checked={option.value === value}
                        onChange={handleRadioChange}
                        disabled={disabled}
                    />
                    <S.RadioLabel disabled={disabled}>
                        {option.label}
                    </S.RadioLabel>
                </S.RadioOptionContainer>
            ))}
        </S.RadioGroupContainer>
    );
};

export default RadioGroup;
