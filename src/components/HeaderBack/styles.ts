import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_700};
    `};

    position: relative;
`;

export const Title = styled.Text`
    padding-top: 30px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.BLACK};
    `};
`

export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    top: 25px;
    left: 20px;
`;

export const IconBack = styled(ArrowLeft).attrs(({}) => ({
    size: 30,
  }))``;