import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: React.ReactNode,
  type?: S.ButtonTypeStyleProps;
};

export function Button({ title, icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container {...rest} type={type}>
      {icon}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
