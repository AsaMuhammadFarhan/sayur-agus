import { Button, Flex, Text } from "@chakra-ui/react";
import { fontStyle } from "@/styles/customTheme/fontStyle";
import ImageWithSkeleton from "@/components/image/ImageWithSkeleton";
import Link from "next/link";

const IndexPage = () => {
  return (
    <Flex
      alignItems="center"
      position="relative"
      direction="column"
      justify="center"
      minW="100vw"
      minH="100vh"
      p="40px"
    >
      <Flex
        transition="2s ease-in"
        alignItems="center"
        direction="column"
      >
        <Flex
          alignItems="center"
        >
          <ImageWithSkeleton
            height={["45px", "45px", "72px"]}
            width={["45px", "45px", "72px"]}
            src="/kubis-icon.png"
            alt="Logo Dotangi"
            borderRadius="8px"
            mr="10px"
          />
          <Text
            fontSize={["30px", "30px", "48px"]}
            letterSpacing="0.0025em"
            fontWeight={700}
          >
            Do Tangi
          </Text>
        </Flex>
        <Text
          mt={["20px", "20px", "40px"]}
          {...fontStyle.body1medium}
          textAlign="center"
          color="#6E7A8A"
          maxW="550px"
        >
          Temukan kemudahan dalam memesan sayuran Mas Agus!
          Pesan hari ini untuk besok pagi ya.
        </Text>
        <Link href="/cart">
          <Button colorScheme="green" mt="40px">
            Pesan Sekarang
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
