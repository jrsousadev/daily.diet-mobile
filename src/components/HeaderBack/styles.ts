import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  color: "GREEN" | "RED" | "SECONDARY";
};

export const Container = styled.View<Props>`
  ${({ theme, color }) => css`
    background-color: ${color === "SECONDARY"
      ? theme.COLORS.GRAY_700
      : color === "GREEN"
      ? theme.COLORS.GREEN_200
      : theme.COLORS.RED_200};
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
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 20px;

  z-index: 2;
`;

export const IconBack = styled(ArrowLeft).attrs(({}) => ({
  size: 30,
}))``;
