import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  feed: string;
  insideDiet: boolean;
};

export function CardFeed({ hour, feed, insideDiet, ...rest }: Props) {
  return (
    <S.Touchable {...rest}>
      <S.Container>
        <S.Hour>{hour}</S.Hour>
        <S.Feed numberOfLines={1}>{feed}</S.Feed>
        <S.InsideDiet insideDiet={insideDiet}>{insideDiet}</S.InsideDiet>
      </S.Container>
    </S.Touchable>
  );
}
