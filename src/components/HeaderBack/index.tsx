import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type Props = {
  title: string;
  color?: "GREEN" | "RED" | "SECONDARY";
};

export function HeaderBack({ color = "SECONDARY", title }: Props) {
  const navigate = useNavigation();

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container color={color}>
      <S.ButtonBack onPress={handleBack}>
        <S.IconBack />
      </S.ButtonBack>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
