import styled from "@emotion/styled";
import tw from "twin.macro";

type Props = {
  children: React.ReactNode;
};

const H2 = styled.h2`
  font-size: 1rem;
  ${tw`ml-4 mb-4`};
`;

const H2Title: React.FC<Props> = ({ children }) => <H2>{children}</H2>;
export default H2Title;
