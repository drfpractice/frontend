import styled from "styled-components";

const ContainerContainer = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const Container = styled(ContainerContainer)`
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
`;