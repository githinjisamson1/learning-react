import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  // !attach query string/ params to URL
  const [searchParams, setSearchParams] = useSearchParams();

  // !get("filter") to access value
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      {/* because this are children/just provide id (url param) */}
      <Link to="1">User 1</Link>
      <Link to="2">User 2</Link>
      <Link to="3">User 3</Link>

      <Outlet />

      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active User
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
        >
          Reset Filter
        </button>
      </div>
      {showActiveUsers ? (
        <h1>Showing active users</h1>
      ) : (
        <h1>Showing all users</h1>
      )}
    </div>
  );
};

export default Users;
