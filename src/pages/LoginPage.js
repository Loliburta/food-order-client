import styled from 'styled-components';
import LoginBox from '../components/LoginBox';

const LoginPage = () => {
  return (
    <>
      <StyledLoginPage>
        <LoginBox />
      </StyledLoginPage>
    </>
  );
};

const StyledLoginPage = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
`;

export default LoginPage;
