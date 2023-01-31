import { StyleProp, TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type: "PRIMARY" | "SECONDARY";
  styleContainer?: StyleProp<any>;
  selected: boolean;
};

export function CustomSelect({
  title,
  type,
  selected = false,
  styleContainer,
  ...rest
}: Props) {
  return (
    <S.Touchable {...rest}>
      <S.Container isSelected={selected} type={type} style={styleContainer}>
        <S.CircleColor type={type} />
        <S.Title>{title}</S.Title>
      </S.Container>
    </S.Touchable>
  );
}
