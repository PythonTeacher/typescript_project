import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Link to="/home">홈</Link> | 
      <Link to="/music">Music</Link> |
      <Link to="/about">소개</Link>
    </>
  )
}

export default Navigation;