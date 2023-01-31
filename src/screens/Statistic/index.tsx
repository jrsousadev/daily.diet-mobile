import { CardInfo } from "@components/CardInfo";
import { CardPercentage } from "@components/CardPercentage";
import { FeedDTO, MeasureDiet } from "@domain/Feed";
import { getAllFeeds } from "@storage/feed/getAllFeeds";
import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function Static() {
  const [feeds, setFeeds] = useState<FeedDTO[] | []>([]);

  const { COLORS } = useTheme();

  const infosDiet = useMemo(() => {
    return MeasureDiet(feeds);
  }, [feeds]);

  const fetchFeeds = async () => {
    try {
      const data = await getAllFeeds();

      setFeeds(data);
    } catch (err) {
      Alert.alert("Refeições", "Não foi possível carregar as refeições");
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

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
          value={infosDiet.sequence}
        />

        <CardInfo
          title="refeições registradas"
          color="SECONDARY"
          value={feeds.length}
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
