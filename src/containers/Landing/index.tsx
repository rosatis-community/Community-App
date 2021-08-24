import { styled } from '@material-ui/core/styles';
import { FC } from 'react';
import CContainer from '../../components/commons/CContainer';
import CGrid from '../../components/commons/CGrid';
import Posts from '../../components/Post/Posts';
import Sider from '../../components/Sider';

const LandingRoot = styled('div')(() => ({
  height: '100%',
}));

const ContainerContent = styled('div')(() => ({
  height: '100%',
  display: 'flex',
}));

const Landing: FC = () => {
  return (
    <LandingRoot>
      Main
      <CContainer maxWidth="md">
        <ContainerContent>
          <CGrid container>
            <CGrid container item xs={8}>
              <CGrid item xs={12}>
                <Posts />
              </CGrid>
            </CGrid>
            <CGrid item xs={4}>
              <Sider />
            </CGrid>
          </CGrid>
        </ContainerContent>
      </CContainer>
    </LandingRoot>
  );
};

export default Landing;
