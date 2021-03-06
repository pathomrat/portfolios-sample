import React from "react";
import Header from "../shared/Header";

interface BaseLayoutProps {
  className?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { className, children } = props;

  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
