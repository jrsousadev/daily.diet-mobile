
import { ViewStyle } from "react-native";
import * as S from "./styles";

type Props = {
  color: "GREEN" | "SECONDARY" | "RED";
  title: string;
  value: number;
  style?: ViewStyle;
};

export function CardInfo({ color, style, value, title }: Props) {
  return (
    <S.Container color={color} style={style}>
      <S.Value>{value}</S.Value>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
