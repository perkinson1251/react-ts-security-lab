import styled from "styled-components";

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
`;

export const CheckboxInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 24px;
    height: 22px;
    flex-shrink: 0;

    background-color: #0b1823;
    border: 1px solid #08455e;

    appearance: none;
    border-radius: 2px;
    margin-right: 8px;

    transition: 0.5s;

    position: relative;

    color: #00aee5;

    &:hover {
        background-color: #2d6172;
        border-color: #207995;
    }

    &:checked {
        background-color: #2d6172;
        border-color: #207995;

        &::after {
            content: "×";
            text-align: center;
            font-size: 27px;
            font-weight: 500;
            line-height: 13px;
            letter-spacing: -1.35px;
        }
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const CheckboxLabel = styled.span<{ disabled?: boolean }>`
    font-size: 14px;
    color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
`;
