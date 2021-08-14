import { styled } from '@material-ui/core/styles';
import { FC } from 'react';
import CContainedButton from '../components/commons/CContainedButton';
import CContainer from '../components/commons/CContainer';
import Daily from '../components/Sider';

const LandingRoot = styled('div')(({ theme }) => ({
  height: '100%'
}));

const ContainerContent = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
}));

const Landing: FC = () => {
  return (
    <LandingRoot>
      <CContainer maxWidth="lg">
        <ContainerContent>
          <Daily />
          <CContainedButton color="neutral">deneme</CContainedButton>
        </ContainerContent>
      </CContainer>
    </LandingRoot>
  );
};

export default Landing;
