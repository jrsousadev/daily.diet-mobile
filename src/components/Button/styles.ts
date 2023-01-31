import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  align-items: center;
  flex-direction: row;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.BLACK : "transparent"};

  border-radius: 6px;

  border: ${({ theme, type }) =>
    type === "SECONDARY" ? `1px solid ${theme.COLORS.BLACK}` : ""};

  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  text-align: center;
`;
