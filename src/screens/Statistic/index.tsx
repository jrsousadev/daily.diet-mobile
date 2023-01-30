import { CardInfo } from "@components/CardInfo";
import { CardPercentage } from "@components/CardPercentage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function Static() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GREEN_200,
      }}
    >
      <CardPercentage percentage={90.86} isFullscreen={true} />

      <S.Container>
        <S.Title>Estatísticas gerais</S.Title>

        <CardInfo
          title="melhor sequência de pratos dentro da dieta"
          color="SECONDARY"
          value={22}
        />

        <CardInfo title="refeições registradas" color="SECONDARY" value={109} />

        <S.ContainerTwoCard>
          <CardInfo
            title="refeições dentro da dieta"
            color="GREEN"
            style={{flex: 1, marginRight: 5}}
            value={99}
          />

          <CardInfo
            title="refeições fora da dieta"
            color="RED"
            style={{flex: 1, marginLeft: 5}}
            value={10}
          />
        </S.ContainerTwoCard>
      </S.Container>
    </SafeAreaView>
  );
}
