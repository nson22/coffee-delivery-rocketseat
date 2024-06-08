import { NavLink } from "react-router-dom";
import Logo from "../../assets//cd-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  CurrentLocationButton,
  HeaderWrapper,
  ShoppingCartButton,
} from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/" data-testid="home_lnk">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <CurrentLocationButton data-testid="current_location_btn">
          <MapPin size={22} weight="fill" />
          <span>Manaus, AM</span>
        </CurrentLocationButton>
        <NavLink to="/checkout" data-testid="checkout_lnk">
          <ShoppingCartButton data-testid="checkout_btn">
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </nav>
    </HeaderWrapper>
  );
}
