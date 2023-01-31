import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
    width: 100%;
`

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.BLACK};
    `};

    padding-bottom: 5px;
`

export const InputContainer = styled(TextInput)`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        color: ${theme.COLORS.BLACK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px; 
        border: 1px solid ${theme.COLORS.GRAY_500};
    `}

    min-height: 50px;
    max-height: 50px;

    border-radius: 6px;
    padding: 16px;
`