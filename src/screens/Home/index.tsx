import * as S from "./styles";

import logoImg from "@assets/Logo.png";
import moment from "moment";

import { CardPercentage } from "@components/CardPercentage";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { Alert, SectionList } from "react-native";
import { CardFeed } from "@components/CardFeed";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import { FeedDTO, formattedFeedsToDate, MeasureDiet } from "../../domain/Feed";
import { useCallback, useState } from "react";
import { getAllFeeds } from "@storage/feed/getAllFeeds";

export function HomeScreen() {
  const [feeds, setFeeds] = useState<FeedDTO[] | []>([]);

  const theme = useTheme();
  const navigate = useNavigation();

  const feedsFormatted = formattedFeedsToDate(feeds);
  const infosDiet = MeasureDiet(feeds);

  const handleOpenCreateFeed = () => {
    navigate.navigate("createFeed");
  };

  const fetchFeeds = async () => {
    try {
      const data = await getAllFeeds();

      setFeeds(data);
    } catch (err) {
      Alert.alert("Refeições", "Não foi possível carregar as refeições");
    }
  };

  const handleGetOneFeed = async (id: string) => {
    try {
      navigate.navigate("viewFeed", { id });
    } catch (err) {
      Alert.alert("Refeição", "Houve um erro ao selecionar a refeição");
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFeeds();
    }, [])
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.BACKGROUND,
        paddingTop: 32,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <S.Container>
        <S.ContainerNavbar>
          <S.Logo source={logoImg} />
          <S.PhotoUser
            source={{
              uri: "https://i.pinimg.com/280x280_RS/61/41/2d/61412d7950132bc3abd124fe1e5d8a29.jpg",
            }}
          />
        </S.ContainerNavbar>

        <CardPercentage
          onOpen={() => navigate.navigate("static")}
          percentage={infosDiet.percentage}
        />

        <S.TitleFeed>Refeições</S.TitleFeed>

        <Button
          icon={<Plus size={32} color="white" style={{ marginRight: 10 }} />}
          title="Nova refeição"
          onPress={handleOpenCreateFeed}
        />

        <SectionList
          sections={feedsFormatted}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <CardFeed
              feed={item.name}
              hour={moment(item.createdAt).format("HH:mm")}
              insideDiet={item.insideDiet}
              onPress={() => handleGetOneFeed(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <S.TitleSectionList>
              {moment(date).format("DD.MM.YYYY")}
            </S.TitleSectionList>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </S.Container>
    </SafeAreaView>
  );
}
