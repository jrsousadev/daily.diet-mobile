import { CardInfo } from "@components/CardInfo";
import { CardPercentage } from "@components/CardPercentage";
import { MeasureDiet } from "@domain/Feed";
import { DATA } from "@storage/Feeds";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function Static() {
  const { COLORS } = useTheme();

  const infosDiet = MeasureDiet(DATA);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          infosDiet.percentage <= 50 ? COLORS.RED_200 : COLORS.GREEN_200,
      }}
    >
      <CardPercentage percentage={infosDiet.percentage} isFullscreen={true} />

      <S.Container>
        <S.Title>Estatísticas gerais</S.Title>

        <CardInfo
          title="melhor sequência de pratos dentro da dieta"
          color="SECONDARY"
          value={3}
        />

        <CardInfo
          title="refeições registradas"
          color="SECONDARY"
          value={DATA.length}
        />

        <S.ContainerTwoCard>
          <CardInfo
            title="refeições dentro da dieta"
            color="GREEN"
            style={{ flex: 1, marginRight: 5 }}
            value={infosDiet.inDiet}
          />

          <CardInfo
            title="refeições fora da dieta"
            color="RED"
            style={{ flex: 1, marginLeft: 5 }}
            value={infosDiet.notDiet}
          />
        </S.ContainerTwoCard>
      </S.Container>
    </SafeAreaView>
  );
}
