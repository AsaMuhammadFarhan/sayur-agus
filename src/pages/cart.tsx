import FoodCard from "@/components/card/food";
import Iconify from "@/components/image/Iconify";
import { fontStyle } from "@/styles/customTheme/fontStyle";
import { numberWithSeparator } from "@/utils/format/number";
import menu from "@/utils/menu";
import { Button, Divider, Flex, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CartPage() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const [carts, setCarts] = useState(menu.map((m) => ({
    ...m,
    currentCart: 0,
  })));

  const nomorMasAgus = "62859159868347";

  function increaseOnCart(name: string) {
    const index = carts.findIndex((item) => item.name === name);
    const temp = [...carts];
    temp[index].currentCart = temp[index].currentCart + 1;
    setCarts(temp);
  }

  function decreaseOnCart(name: string) {
    const index = carts.findIndex((item) => item.name === name);
    const temp = [...carts];
    temp[index].currentCart = temp[index].currentCart - 1;
    setCarts(temp);
  }

  const totalItem = carts.map((item) => (item.currentCart)).reduce((a, b) => a + b, 0);
  const totalHarga = carts.map((item) => (item.currentCart * item.price)).reduce((a, b) => a + b, 0);

  function onClickPesan() {
    const templateText = `https://wa.me/${nomorMasAgus}?text=${encodeURI(`Halo Mas Agus! saya ingin memesan
${carts.filter((item) => item.currentCart > 0).map((item) => ` • ${item.name} x${item.currentCart} @${item.price}
`).join("")}
Total bayar: Rp.${numberWithSeparator(totalHarga)}

Pastikan sudah tahu rumah saya dan harganya sudah sesuai ya, mas.`)}`
    window.open(templateText, "_blank")
  }

  function reset() {
    setCarts(menu.map((m) => ({
      ...m,
      currentCart: 0,
    })));
    setSearchKeyword("");
  }

  return (
    <>
      <Stack
        spacing="20px"
        p="20px"
      >
        <Stack spacing="5px">
          <HStack justify="space-between">
            <Text
              {...fontStyle.heading5bold}
            >
              Pilih Bahan
            </Text>
            <Button
              pointerEvents={totalItem === 0 ? "none" : undefined}
              opacity={totalItem === 0 ? 0 : 1}
              onClick={() => reset()}
              colorScheme="green"
              variant="outline"
              size="xs"
            >
              <Iconify
                icon="bx:reset"
                mr="4px"
              />
              Reset
            </Button>
          </HStack>
          <Text
            {...fontStyle.captionRegular}
          >
            Harga yang dicantumkan bisa berbeda dengan aslinya dan akan segera diperbarui
          </Text>
        </Stack>
        <InputGroup size="sm">
          <InputLeftElement>
            <Iconify icon="bx:search" />
          </InputLeftElement>
          <Input
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="cari bahan makanan"
            value={searchKeyword}
            type="search"
          />
        </InputGroup>
        <Flex alignItems="center">
          <Text
            {...fontStyle.captionBold}
            color="gray.500"
            mr="10px"
          >
            Sayur
          </Text>
          <Divider borderWidth="0.5px" borderColor="gray.300" />
        </Flex>
        {carts.filter((item) =>
          item.name.toLowerCase().includes(searchKeyword.toLowerCase()) && item.category === 0
        ).map((item) => (
          <FoodCard
            placeholderImage="/kubis-icon.png"
            description={item.description}
            currentCart={item.currentCart}
            increaseOnCart={increaseOnCart}
            decreaseOnCart={decreaseOnCart}
            placeholderColor="green.100"
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
        <Flex alignItems="center">
          <Text
            {...fontStyle.captionBold}
            color="gray.500"
            mr="10px"
          >
            Daging
          </Text>
          <Divider borderWidth="0.5px" borderColor="gray.300" />
        </Flex>
        {carts.filter((item) =>
          item.name.toLowerCase().includes(searchKeyword.toLowerCase()) && item.category === 1
        ).map((item) => (
          <FoodCard
            placeholderImage="/ayam-icon.png"
            description={item.description}
            currentCart={item.currentCart}
            increaseOnCart={increaseOnCart}
            decreaseOnCart={decreaseOnCart}
            placeholderColor="yellow.100"
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
        <Flex h="160px" />
      </Stack>

      <Flex
        boxShadow="0px -8px 63px -22px rgba(0,0,0,0.7)"
        borderTopRadius="20px"
        bgColor="white"
        position="fixed"
        bottom={0}
        p="20px"
        w="100%"
      >
        <Button
          onClick={() => onClickPesan()}
          colorScheme="green"
          w="100%"
        >
          <Iconify
            icon="bxl:whatsapp"
            boxSize="24px"
            mr="8px"
          />
          Pesan {totalItem > 0 ? `(${totalItem} bahan)` : ""}
        </Button>
      </Flex>
    </>
  )
}