import { styled } from '@material-ui/core/styles';
import { FC } from 'react';
import CContainer from '../components/commons/CContainer';
import CGrid from '../components/commons/CGrid';
import CreatePost from '../components/Post/CreatePost';
import Posts from '../components/Post/Posts';
import Sider from '../components/Sider';

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
      <CContainer maxWidth="md">
        <ContainerContent>
          <CGrid container>
            <CGrid container item xs={6}>
              <CGrid item xs={12}>
                <CreatePost />
              </CGrid>
              <CGrid item xs={12}>
                <Posts />
              </CGrid>
            </CGrid>
            <CGrid item xs={6}>
              <Sider />
            </CGrid>
          </CGrid>
        </ContainerContent>
      </CContainer>
    </LandingRoot>
  );
};

export default Landing;
