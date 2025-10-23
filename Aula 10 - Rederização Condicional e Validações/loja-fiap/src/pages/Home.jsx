import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL;

  
  useEffect(() => {
    setIsLoading(true)
    
    fetch(`${API_URL}/category/electronics`)
    .then((res) => res.json())
    .then((data) => setElectronics(data));
    
    fetch(`${API_URL}/category/jewelery`)
    .then((res) => res.json())
    .then((data) => setJewelery(data));
    
    fetch(`${API_URL}/category/men's clothing`)
    .then((res) => res.json())
    .then((data) => setMensClothing(data));
    
    fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => setAllProducts(data))
    .finally(() => setIsLoading(false));
  }, []);
  
  const filtradosJaquetas = allProducts.filter(
    (product) =>
      product.title.includes("jacket") ||
      product.title.includes("coat") ||
      product.description.includes("jacket") ||
      product.description.includes("coat")
  );

  if (isLoading) {
    return (
      <p>Carregando...</p>
    )
  }
  
  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Queridinhos">
        {allProducts
          .filter((product) => product.rating.rate >= 4)
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </SectionContainer>

      <SectionContainer title="No precinho!">
        {allProducts
          .filter((product) => product.price >= 50 && product.price <= 100)
          .sort((a, b) => a.price - b.price)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </SectionContainer>

      <SectionContainer title="Jaquetas e Casacos">
        {filtradosJaquetas.length > 0 ? (
          filtradosJaquetas
            .sort((a, b) => a.price - b.price)
            .map((product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </SectionContainer>
    </div>
  );
}
