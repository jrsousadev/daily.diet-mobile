import { Button } from "@components/Button";
import { HeaderBack } from "@components/HeaderBack";
import { FeedDTO } from "@domain/Feed";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { getOneFeed } from "@storage/feed/getOneFeed";
import { PencilSimple, Trash } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import moment from "moment";
import * as S from "./styles";
import { deleteFeed } from "@storage/feed/deleteFeed";

type RouteParams = {
  id: string;
};

export function ViewFeed() {
  const [feed, setFeed] = useState<FeedDTO>();

  const { COLORS } = useTheme();
  const navigate = useNavigation();
  const route = useRoute();

  const { id: feedId } = route.params as RouteParams;

  const fetchGetFeed = async () => {
    try {
      const data = await getOneFeed(feedId);
      setFeed(data);
    } catch (err) {
      Alert.alert("Refeição", "Houve um erro ao tentar pegar a refeição");
    }
  };

  const handleConfirmDeleteFeed = async () => {
    try {
      await deleteFeed(feedId);
      navigate.navigate("home");
    } catch (err) {
      Alert.alert("Excluir refeição", "Houve um erro ao tentar excluir a refeição");
    }
  }

  const handleDeleteFeed = async () => {
    try {
      Alert.alert("Remover", "Deseja remover a refeição?", [
        { text: "Sim", onPress: () => handleConfirmDeleteFeed() },
        { text: "Não", style: "cancel" },
      ]);
    } catch (err) {
      Alert.alert("Excluir refeição", "Houve um erro ao tentar excluir a refeição");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGetFeed();
    }, [])
  );

  if (!feed) {
    return;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: feed.insideDiet ? COLORS.GREEN_200 : COLORS.RED_200,
      }}
    >
      <HeaderBack title="Refeição" color={feed.insideDiet ? "GREEN" : "RED"} />
      <S.Container>
        <S.NameFeed>{feed.name}</S.NameFeed>
        <S.DescriptionFeed>{feed.description}</S.DescriptionFeed>
        <S.Title>Data e hora</S.Title>
        <S.DateAndHour>
          {moment(feed.createdAt).format("DD/MM/YYYY [às] HH:mm")}
        </S.DateAndHour>

        <S.ContainerButtons>
          <Button
            title="Editar refeição"
            icon={
              <PencilSimple
                size={22}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
          />
          <Button
            title="Excluir refeição"
            icon={<Trash size={22} style={{ marginRight: 10 }} />}
            type="SECONDARY"
            onPress={handleDeleteFeed}
            style={{ marginTop: 10 }}
          />
        </S.ContainerButtons>
      </S.Container>
    </SafeAreaView>
  );
}
