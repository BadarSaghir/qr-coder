import React, { PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";
type Props = {} & PropsWithChildren;

const Home = ({ children }: Props) => {
  return (
    <div className="relative h-screen w-screen bg-primary">
      <Navbar />
      {children}
    </div>
  );
};

export default Home;
