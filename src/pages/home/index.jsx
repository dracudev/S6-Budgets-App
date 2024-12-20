import { Link } from "react-router-dom";
import { HeaderBanner } from "../../components/HeaderBanner";
import { StandardButton } from "../../components/StandardButton";
import "./index.css";
import { CustomCard } from "../../components/CustomCard";
import { RiMoneyEuroCircleFill } from "react-icons/ri";



export function Home() {
  return (
    <>
      <HeaderBanner>
        <h1 className="text-center text-white">Welcome to the budget calculator!</h1>
      </HeaderBanner>

      <Link to="/budget" style={{textDecoration: "none"}}>
        <StandardButton className="my-4 d-flex align-items-center"><RiMoneyEuroCircleFill className="me-2"/>Budgets</StandardButton>
      </Link>

      <CustomCard className="container">
        <h1 className="">Welcome to Our Service</h1>
        <p className="lead mt-4">
          We are dedicated to providing you with the best quality services to
          meet your needs. Whether you are looking for web development, SEO
          optimization, or advertising solutions, we have the expertise to help
          you succeed. Explore our services and discover how we can help you
          achieve your goals.
        </p>
        <p>
          Our team of professionals is committed to delivering exceptional
          results and ensuring your satisfaction. We take pride in our work and
          strive to exceed your expectations. Thank you for choosing us as your
          trusted partner.
        </p>
      </CustomCard>
    </>
  );
}
