import { Pressable, Row, Text } from "native-base";

import React from "react";
import { Share } from "react-native";

interface Props {
  code: string;
}

export function EmptyMyPoolList({ code }: Props) {
  async function handleCodeShare() {
    await Share.share({
      message: `Código para participar do bolão: ${code}`,
    });
  }
  return (
    <Row flexWrap="wrap" justifyContent="center" p={3}>
      <Text color="gray.200" fontSize="sm">
        Esse bolão ainda não tem participantes, que tal
      </Text>

      <Pressable onPress={handleCodeShare}>
        <Text
          textDecorationLine="underline"
          color="yellow.500"
          textDecoration="underline"
        >
          compartilhar o código
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" mx={1}>
        do bolão com alguém?
      </Text>

      <Text color="gray.200" mr={1}>
        Use o código
      </Text>

      <Text
        color="gray.200"
        fontSize="sm"
        textAlign="center"
        fontFamily="heading"
      >
        {code}
      </Text>
    </Row>
  );
}
