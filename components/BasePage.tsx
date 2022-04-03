import { Container } from "reactstrap";

interface BasePageProps {
  className?: string;
}

const BasePage: React.FC<BasePageProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default BasePage;
