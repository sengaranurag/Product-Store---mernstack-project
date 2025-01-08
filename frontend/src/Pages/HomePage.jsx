import { Container, SimpleGrid, Text, VStack , Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin login state
    navigate("/login");
  };
  const { fetchProduct, products } = useProductStore();

  useEffect (() => {
    fetchProduct();
  },[fetchProduct]);

  console.log("products",products);

  return (
    <Container maxWidth='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
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
						<ProductCard key={product._id} product={product} />
					))}
        </SimpleGrid>

        {products.length == 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No Products Added 😢{" "}
          <Link to={"/create"}>
            <Text as= 'span' color='blue.500' _hover={{textDecoration:"underline",textShadow:"0px 8px 15px rgba(55,117,203,0.7)"}}>
              Create a Product!
            </Text>
          </Link>
        </Text>
        )}
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={() => navigate("/create")} _hover={{ transform: "translateY(-5px)", shadow: "xl"}}>
            New Product
          </Button>
          <Button colorScheme="red"  onClick={handleLogout} _hover={{ transform: "translateY(-5px)", shadow: "xl"}}>
            Logout
          </Button>
        </HStack>
      </VStack>
    </Container>
  )
}
export default HomePage;