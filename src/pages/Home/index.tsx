import { ShoppingCart } from "@phosphor-icons/react";
import ImageMakert from "../../assets/cd-image-market.svg";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <span>
          <i>
            <ShoppingCart />
          </i>
          Compra simples e segura
        </span>
      </HomeContainer>
      <img src={ImageMakert} />
    </>
  );
}
