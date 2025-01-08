import { Container, SimpleGrid, Text, VStack, Box, Image, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/product";

const UserPage = () => {
  const { fetchProduct, products } = useProductStore();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const generateWhatsAppLink = (product) => {
    const message = `"${product.image}"Hello, I am interested in your product "${product.name}" priced at ₹${product.price}. Can you provide more details?`;
    return `https://wa.me/+917905114640?text=${encodeURIComponent(message)}`;
  };

  return (
    <Container maxWidth="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, red.400, green.600)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Explore Products 🛍️
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <Box
              key={product._id}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              bg={bg}
            >
              <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>

                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
                  ₹{product.price}
                </Text>

                <Link
                  href={generateWhatsAppLink(product)} isExternal
                  color="teal.500"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  Contact via WhatsApp for more details!
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
            No Products Available 😢
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default UserPage;
