import * as S from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBack } from "@components/HeaderBack";
import { useTheme } from "styled-components/native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function CreateFeed() {
    const theme = useTheme();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: theme.COLORS.GRAY_700,
        }}>
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

                <S.ContainerFlexWithGap>
                    <Input label="Data" styleContainer={{ flex: 1, marginRight: 5 }} />
                    <Input label="Hora" styleContainer={{ flex: 1, marginLeft: 5 }} />
                </S.ContainerFlexWithGap>

                <S.ContainerFlexWithGap>

                </S.ContainerFlexWithGap>
            </S.Container>
            <Button 
                title="Cadastrar refeição" 
                style={{ 
                    position: "absolute", 
                    bottom: 15, 
                    maxWidth: '90%',
                    left: 23,
                }} 
            />
        </SafeAreaView>
    )
}