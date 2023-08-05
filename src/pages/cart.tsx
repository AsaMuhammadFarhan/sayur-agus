import Iconify from "@/components/image/Iconify";
import ImageWithSkeleton from "@/components/image/ImageWithSkeleton";
import { fontStyle } from "@/styles/customTheme/fontStyle";
import { numberWithSeparator } from "@/utils/format/number";
import { Button, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CartPage() {
  const [veggetables, setVeggetables] = useState([
    {
      name: "kubis",
      description: "Deskripsi",
      image: "",
      price: 500,
      currentCart: 0,
    },
    {
      name: "telur seperempat",
      description: "Duluan telur atau ayam?",
      image: "",
      price: 8000,
      currentCart: 0,
    },
    {
      name: "nama sayur yang panjang banget",
      image: "",
      price: 8000,
      currentCart: 0,
    },
  ]);

  const nomorMasAgus = "62859159868347";

  function increaseOnCart(name: string) {
    const index = veggetables.findIndex((veggie) => veggie.name === name);
    const temp = [...veggetables];
    temp[index].currentCart = temp[index].currentCart + 1;
    setVeggetables(temp);
  }

  function decreaseOnCart(name: string) {
    const index = veggetables.findIndex((veggie) => veggie.name === name);
    const temp = [...veggetables];
    temp[index].currentCart = temp[index].currentCart - 1;
    setVeggetables(temp);
  }

  const totalItem = veggetables.map((veggie) => (veggie.currentCart)).reduce((a, b) => a + b, 0);
  const totalHarga = veggetables.map((veggie) => (veggie.currentCart * veggie.price)).reduce((a, b) => a + b, 0);

  const templateText = `https://wa.me/${nomorMasAgus}?text=${encodeURI(`Halo Mas Agus, saya ingin memesan:
${veggetables.map((veggie) => `- ${veggie.name} x${veggie.currentCart} @${veggie.price}
`).join("")}
dengan total Rp.${numberWithSeparator(totalHarga)}
`)}`

  return (
    <>
      <Stack
        spacing="20px"
        p="20px"
      >
        <Stack spacing="5px">
          <Text
            {...fontStyle.heading5bold}
          >
            Pilih Sayur
          </Text>
          <Text
            {...fontStyle.captionRegular}
          >
            Harga yang dicantumkan bisa berbeda dengan aslinya dan akan segera diperbarui
          </Text>
        </Stack>
        {veggetables.map((veggie) => (
          <HStack
            spacing="10px"
            w="100%"
          >
            <ImageWithSkeleton
              src={veggie.image || "/kubis-icon.png"}
              alt={"gambar " + veggie.name}
              bgColor="green.100"
              borderRadius="10px"
              height="60px"
              width="60px"
            />
            <Stack spacing="5px">
              <Text
                textTransform="capitalize"
                {...fontStyle.body1bold}
                noOfLines={1}
              >
                {veggie.name}
              </Text>
              {!veggie.description === false && (
                <Text
                  {...fontStyle.caption}
                  noOfLines={1}
                >
                  {veggie.description}
                </Text>
              )}
              <Text
                {...fontStyle.body2bold}
                color="sayur.accent700"
              >
                Rp{numberWithSeparator(veggie.price)}
              </Text>
            </Stack>
            <Spacer />
            {veggie.currentCart > 0 ? (
              <Stack
                alignItems="end"
                spacing="5px"
              >
                <HStack spacing="10px">
                  <Button
                    onClick={() => decreaseOnCart(veggie.name)}
                    size="xs"
                  >
                    -
                  </Button>
                  <Text {...fontStyle.body2bold}>
                    {veggie.currentCart}
                  </Text>
                  <Button
                    onClick={() => increaseOnCart(veggie.name)}
                    colorScheme="green"
                    size="xs"
                  >
                    +
                  </Button>
                </HStack>
                <Text {...fontStyle.captionBold}>
                  Rp{numberWithSeparator(veggie.currentCart * veggie.price)}
                </Text>
              </Stack>
            ) : (
              <Button
                onClick={() => increaseOnCart(veggie.name)}
                colorScheme="green"
                minW="76.78px"
                size="sm"
              >
                Tambah
              </Button>
            )}
          </HStack>
        ))}
      </Stack>

      <Flex
        boxShadow="0px -8px 63px -22px rgba(0,0,0,0.7)"
        borderTopRadius="20px"
        position="fixed"
        bottom={0}
        p="20px"
        w="100%"
      >
        <Button
          onClick={() => window.open(templateText, "_blank")}
          colorScheme="green"
          w="100%"
        >
          <Iconify
            icon="bxl:whatsapp"
            boxSize="24px"
            mr="8px"
          />
          Pesan {totalItem > 0 ? `(${totalItem} barang)` : ""}
        </Button>
      </Flex>
    </>
  )
}