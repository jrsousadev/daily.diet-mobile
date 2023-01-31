import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);

  margin-top: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `}

  align-items: center;

  padding-top: 33px;

  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}

  padding-bottom: 18px;
`

export const ContainerTwoCard = styled.View`
  flex-direction: row;
  width: 100%;
`