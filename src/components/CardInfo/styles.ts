import styled, { css } from "styled-components/native";

type Props = {
  color: "GREEN" | "SECONDARY" | "RED";
};

export const Container = styled.View<Props>`
  ${({ theme, color }) => css`
    background-color: ${color === "GREEN"
      ? theme.COLORS.GREEN_200
      : color === "RED"
      ? theme.COLORS.RED_200
      : theme.COLORS.GRAY_200};
  `}

  width: 100%;
  padding: 16px;
  margin-top: 10px;

  border-radius: 8px;

  align-items: center;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}

  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `}

  padding-top: 10px;
  text-align: center;
`;
