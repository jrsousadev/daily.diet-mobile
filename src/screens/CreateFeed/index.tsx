import * as S from "./styles";
import moment from "moment";

import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBack } from "@components/HeaderBack";
import { useTheme } from "styled-components/native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { CustomSelect } from "@components/CustomSelect";
import { useState } from "react";
import { Alert } from "react-native";
import { FeedDTO } from "@domain/Feed";
import { createFeed } from "@storage/feed/createFeed";
import { useNavigation } from "@react-navigation/native";
import { generateUUID } from "@utils/generateUUID";

export function CreateFeed() {
  const theme = useTheme();
  const navigate = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [hour, setHour] = useState("");
  const [isInsideDiet, setIsInsideDiet] = useState<boolean>();

  const handleAddFeed = async () => {
    try {
      if (typeof isInsideDiet === "undefined") {
        return Alert.alert(
          "Criar refeição",
          "Para continuar, marque a opção se está dentro da dieta."
        );
      }

      if (!name) {
        return Alert.alert(
          "Criar refeição",
          "Para continuar, insira o nome da refeição"
        );
      }

      if (!date) {
        return Alert.alert(
          "Criar refeição",
          "Para continuar, insira o dia da refeição"
        );
      }

      if (!hour) {
        return Alert.alert(
          "Criar refeição",
          "Para continuar, insira a hora da refeição"
        );
      }

      const newFeed: FeedDTO = {
        id: generateUUID(32),
        name,
        description,
        insideDiet: isInsideDiet,
        createdAt: new Date(`${date}T${hour}:00`),
      };

      await createFeed(newFeed);
      navigate.navigate("feedbackDiet", { inDiet: isInsideDiet });
    } catch (err) {
      Alert.alert("Criar refeição", "Não foi possível criar a refeição");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_700,
      }}
    >
      <HeaderBack title="Nova refeição" />
      <S.Container>
        <Input
          label="Nome"
          value={name}
          onChangeText={setName}
          onSubmitEditing={handleAddFeed}
          returnKeyType="done"
        />
        <Input
          styleLabel={{ marginTop: 20 }}
          label="Descrição"
          textAlignVertical="top"
          style={{ maxHeight: 150 }}
          numberOfLines={4}
          multiline
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={handleAddFeed}
          returnKeyType="done"
        />

        <S.ContainerFlexTwoInputs>
          <Input
            label="Data"
            styleContainer={{ flex: 1, marginRight: 5 }}
            value={date}
            onChangeText={setDate}
            onSubmitEditing={handleAddFeed}
            returnKeyType="done"
          />
          <Input
            label="Hora"
            styleContainer={{ flex: 1, marginLeft: 5 }}
            value={hour}
            onChangeText={setHour}
            onSubmitEditing={handleAddFeed}
            returnKeyType="done"
          />
        </S.ContainerFlexTwoInputs>

        <S.Text>Está dentro da dieta?</S.Text>
        <S.ContainerFlexTwoSelects>
          <CustomSelect
            selected={isInsideDiet === true}
            title={"Sim"}
            type={"PRIMARY"}
            onPress={() => setIsInsideDiet(true)}
            styleContainer={{ marginRight: 5 }}
          />
          <CustomSelect
            selected={isInsideDiet === false}
            title={"Não"}
            type={"SECONDARY"}
            onPress={() => setIsInsideDiet(false)}
            styleContainer={{ marginLeft: 5 }}
          />
        </S.ContainerFlexTwoSelects>

        <S.ContainerFlexEndButton>
          <Button title="Cadastrar refeição" onPress={handleAddFeed} />
        </S.ContainerFlexEndButton>
      </S.Container>
    </SafeAreaView>
  );
}
