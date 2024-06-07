import { NavLink } from "react-router-dom";
import Logo from "../../assets//cd-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  CurrentLocationButton,
  HeaderContainer,
  ShoppingCartButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/">
          <CurrentLocationButton>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </CurrentLocationButton>
        </NavLink>
        <NavLink to="/checkout">
          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
