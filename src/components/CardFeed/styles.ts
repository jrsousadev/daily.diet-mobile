import styled, { css } from "styled-components/native";

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
  `};

  border-radius: 6px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 13px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `};

  border-right-width: 1px;
  border-right-color: #b9bbbc;
  padding-right: 8px;
`;
export const Feed = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `};

  max-width: 230px;
  width: 100%;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

type Props = {
  insideDiet: boolean;
};

export const InsideDiet = styled.View<Props>`
  ${({ theme, insideDiet }) => css`
    background-color: ${insideDiet
      ? theme.COLORS.GREEN_400
      : theme.COLORS.RED_400};
  `}

  width: 13px;
  height: 13px;
  border-radius: 50px;
`;
