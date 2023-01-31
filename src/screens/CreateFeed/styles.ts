import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  margin-top: 40px;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `}
`;

export const ContainerFlexTwoInputs = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
  `}
  
  padding-top: 20px;
  padding-bottom: 5px;
`;

export const ContainerFlexTwoSelects = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ContainerFlexEndButton = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 15px;
`;
