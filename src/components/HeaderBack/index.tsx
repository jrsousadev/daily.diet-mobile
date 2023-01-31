import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type Props = {
  title: string;
};

export function HeaderBack({ title }: Props) {
  const navigate = useNavigation();

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container>
      <S.ButtonBack onPress={handleBack}>
        <S.IconBack />
      </S.ButtonBack>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
