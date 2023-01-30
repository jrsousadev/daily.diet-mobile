import * as S from "./styles";

import logoImg from "@assets/Logo.png";
import moment from "moment";

import { CardPercentage } from "@components/CardPercentage";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { SectionList, Text } from "react-native";
import { CardFeed } from "@components/CardFeed";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export function HomeScreen() {
  const theme = useTheme();
  const navigate = useNavigation();

  const DATA = [
    {
      title: "12.08.22",
      data: [
        {
          createdAt: new Date(),
          name: "X-tudo",
          description: "",
          insideDiet: false,
        },
        {
          createdAt: new Date(),
          name: "Whey protein com leite",
          description: "",
          insideDiet: true,
        },
        {
          createdAt: new Date(),
          name: "Salada cesar com frango Salada cesar com frango Salada cesar com frango",
          description: "",
          insideDiet: true,
        },
        {
          createdAt: new Date(),
          name: "Vitamina de banana com",
          description: "",
          insideDiet: true,
        },
      ],
    },
    {
      title: "11.08.22",
      data: [
        {
          createdAt: new Date(),
          name: "X-tudo",
          description: "",
          insideDiet: false,
        },
        {
          createdAt: new Date(),
          name: "Whey protein com leite",
          description: "",
          insideDiet: true,
        },
        {
          createdAt: new Date(),
          name: "Salada cesar com frango Salada cesar com frango Salada cesar com frango",
          description: "",
          insideDiet: true,
        },
        {
          createdAt: new Date(),
          name: "Vitamina de banana com",
          description: "",
          insideDiet: true,
        },
      ],
    },
  ];

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
          percentage={90.86}
        />

        <S.TitleFeed>Refeições</S.TitleFeed>

        <Button
          icon={<Plus size={32} color="white" style={{ marginRight: 10 }} />}
          title="Nova refeição"
        />

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <CardFeed
              feed={item.name}
              hour={moment(item.createdAt).format("HH:mm")}
              insideDiet={item.insideDiet}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <S.TitleSectionList>{title}</S.TitleSectionList>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </S.Container>
    </SafeAreaView>
  );
}
