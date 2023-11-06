import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="text" placeholder="Search products" />
      <nav>
        {/* avoid prepending slash */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>

        {/* render child elements */}
        <Outlet />
      </nav>
    </div>
  );
};

export default Products;
