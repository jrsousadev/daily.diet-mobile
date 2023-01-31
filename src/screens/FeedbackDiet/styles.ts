import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

type Props = {
  inDiet: boolean;
}

export const Title = styled.Text<Props>`
  ${({ theme, inDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${inDiet ? theme.COLORS.GREEN : theme.COLORS.RED};
  `}

  margin-bottom: 6px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}

  text-align: center;

  margin-bottom: 30px;
`;

export const Strong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}
`;

export const ImageFeedbackDiet = styled.Image`
`
