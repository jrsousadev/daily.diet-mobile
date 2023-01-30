import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  flex: 1;
`;

export const ContainerNavbar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const PhotoUser = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #000;
`;


export const TitleFeed = styled.Text`
  margin-top: 40px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `};

  margin-bottom: 7px;
`;

export const TitleSectionList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `};

  margin-top: 32px;
`;
