import styled, {css} from "styled-components/native";

export const Container = styled.View`
    height: 100%;

    margin-top: 40px;

    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;

    align-items: center;

    ${({theme}) => css`
        background-color: ${theme.COLORS.WHITE};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    `}
`

export const ContainerFlexWithGap = styled.View`
    margin-top: 20px;
    flex-direction: row;
    width: 100%;
`