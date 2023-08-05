import { Button, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import ImageWithSkeleton from "../image/ImageWithSkeleton";
import { fontStyle } from "@/styles/customTheme/fontStyle";
import { numberWithSeparator } from "@/utils/format/number";

export default function FoodCard({
  name,
  image,
  description,
  price,
  placeholderImage,
  placeholderColor = "green.100",
  currentCart,
  increaseOnCart,
  decreaseOnCart,
}: {
  name: string;
  image?: string;
  description?: string;
  price: number;
  placeholderImage: string;
  placeholderColor?: string;
  currentCart: number;
  increaseOnCart: (name: string) => void;
  decreaseOnCart: (name: string) => void;
}) {
  return (
    <HStack
      spacing="10px"
      w="100%"
    >
      <ImageWithSkeleton
        src={image || placeholderImage}
        alt={"gambar " + name}
        bgColor={placeholderColor}
        borderRadius="10px"
        height="60px"
        width="60px"
      />
      <Stack spacing="5px">
        <Text
          {...fontStyle.body1bold}
          noOfLines={1}
        >
          {name}
        </Text>
        {!description === false && (
          <Text
            {...fontStyle.caption}
            noOfLines={1}
          >
            {description}
          </Text>
        )}
        <Text
          {...fontStyle.body2bold}
          color="sayur.accent700"
        >
          Rp{numberWithSeparator(price)}
        </Text>
      </Stack>
      <Spacer />
      {currentCart > 0 ? (
        <Stack
          alignItems="end"
          spacing="5px"
        >
          <HStack spacing="10px">
            <Button
              onClick={() => decreaseOnCart(name)}
              size="xs"
            >
              -
            </Button>
            <Text {...fontStyle.body2bold}>
              {currentCart}
            </Text>
            <Button
              onClick={() => increaseOnCart(name)}
              colorScheme="green"
              size="xs"
            >
              +
            </Button>
          </HStack>
          <Text {...fontStyle.captionBold}>
            Rp{numberWithSeparator(currentCart * price)}
          </Text>
        </Stack>
      ) : (
        <Button
          onClick={() => increaseOnCart(name)}
          colorScheme="green"
          minW="76.78px"
          size="sm"
        >
          Tambah
        </Button>
      )}
    </HStack>
  )
}