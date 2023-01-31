import styled, { css } from "styled-components/native";

type Props = {
  type: "PRIMARY" | "SECONDARY";
};

type PropsContainer = {
  isSelected: boolean;
  type: "PRIMARY" | "SECONDARY";
};

export const Touchable = styled.TouchableOpacity`
  flex: 1;
`;

export const Container = styled.View<PropsContainer>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-radius: 8px;

  ${({ theme, type, isSelected }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    ${isSelected && {
      border: `1px solid ${
        type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED
      }`,
      backgroundColor: `${
        type === "PRIMARY" ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200
      }`,
    }}
  `}
`;

export const CircleColor = styled.View<Props>`
  width: 9px;
  height: 9px;
  border-radius: 50px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN
      : theme.COLORS.RED};

    border: 1px solid
      ${type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED}; ;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  padding-left: 5px
`;
