import styled from "styled-components";

export const RadioGroupContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RadioOptionContainer = styled.label`
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    margin-bottom: 8px;
`;

export const RadioInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    background-color: #0b1823;
    border: none;
    /* border: 1px solid #08455e; */
    border-radius: 50%;
    outline: none;
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
            content: "•";
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

export const RadioLabel = styled.span<{ disabled?: boolean }>`
    font-size: 14px;
    color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
`;
