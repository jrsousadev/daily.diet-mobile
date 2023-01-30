import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isAboveAverage?: boolean;
  isFullscreen?: boolean;
};

export const Container = styled.View<Props>`
  position: relative;

  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 20px;
  border-radius: 10px;

  ${({ theme, isAboveAverage, isFullscreen }) => css`
    background-color: ${isAboveAverage
      ? theme.COLORS.GREEN_200
      : theme.COLORS.RED_200};

    margin-top: ${isFullscreen ? '0px' : '32px'};
  `}
`;

export const InfoPercentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}
`;

export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `}
`;

export const ButtonOpen = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 5px;
`;

export const IconOpen = styled(ArrowUpRight).attrs(() => ({
  size: 32,
}))``;

export const IconBack = styled(ArrowLeft).attrs(({}) => ({
  size: 32,
}))``;
