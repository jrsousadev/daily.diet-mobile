import * as S from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBack } from "@components/HeaderBack";
import { useTheme } from "styled-components/native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { CustomSelect } from "@components/CustomSelect";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { DatePickerInput } from "@components/DatePickerInput";

export function CreateFeed() {
  const theme = useTheme();

  const [isInsideDiet, setIsInsideDiet] = useState<boolean>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_700,
      }}
    >
      <DatePickerInput />

      <HeaderBack title="Nova refeição" />
      <S.Container>
        <Input label="Nome" />
        <Input
          styleLabel={{ marginTop: 20 }}
          label="Descrição"
          textAlignVertical="top"
          style={{ maxHeight: 150 }}
          numberOfLines={4}
          multiline
          editable
        />

        <S.ContainerFlexTwoInputs>
          <Input
            label="Data"
            isTouchable
            styleContainer={{ flex: 1, marginRight: 5 }}
          />
          <Input
            label="Hora"
            isTouchable
            styleContainer={{ flex: 1, marginLeft: 5 }}
          />
        </S.ContainerFlexTwoInputs>

        <S.Text>Está dentro da dieta?</S.Text>
        <S.ConntainerFlexTwoSelects>
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
        </S.ConntainerFlexTwoSelects>

        <S.ContainerFlexEndButton>
          <Button title="Cadastrar refeição" />
        </S.ContainerFlexEndButton>
      </S.Container>
    </SafeAreaView>
  );
}
