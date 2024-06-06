import { NavLink } from "react-router-dom";
import Logo from "../../assets//cd-logo.svg";

export function Header() {
  return (
    <>
      <span>
        <img src={Logo} alt="" />
      </span>
      <nav>
        <NavLink to="/">
          <button>Localidade</button>
        </NavLink>
        <NavLink to="/checkout">
          <button></button>
        </NavLink>
      </nav>
    </>
  );
}
