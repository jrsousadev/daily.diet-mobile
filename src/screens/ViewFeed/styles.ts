import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  margin-top: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `}

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const NameFeed = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}

  margin-bottom: 8px;
`;

export const DescriptionFeed = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `}

  margin-bottom: 15px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}

  margin-bottom: 5px;
`;

export const DateAndHour = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `}
`;

export const ContainerButtons = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 15px;
`