import { useState } from "react";

import * as S from "./Checkbox.styles";

interface CheckboxProps {
    label?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    defaultChecked = false,
    disabled = false,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const handleCheckboxChange = () => {
        if (!disabled) {
            const newCheckedValue = !isChecked;
            setIsChecked(newCheckedValue);
            if (onChange) {
                onChange(newCheckedValue);
            }
        }
    };

    return (
        <S.CheckboxContainer>
            <S.CheckboxInput
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
            />
            <S.CheckboxLabel disabled={disabled}>{label}</S.CheckboxLabel>
        </S.CheckboxContainer>
    );
};

export default Checkbox;
