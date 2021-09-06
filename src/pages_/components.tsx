import Head from 'next/head';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from '@/layouts/mainLayout';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//import { Card } from '@material-ui/core';
import PagePiling from '@/components/commons/pagePiling';
import data from './api/data.ts';
import { useState, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import HeaderSection from '@/components/commons/sectionTop';
import FooterSection from '@/components/commons/sectionBottom';
import ButtonGroup from '@/components/commons/buttonGroup';
//import 'react-calendar-heatmap/dist/styles.css';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  root: {
    maxWidth: 'auto',
    width: 'auto',
    margin: 10,
  },
  pageHeader: { marginTop: 180, textAlign: 'center' },
  test: {
    width: '100%',
    height: '65vh',
    backgroundColor: 'red',
  },
  test1: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
  },
  test2: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'red',
  },

  media: {
    height: 200,
  },
  buttonStyle: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
});

interface cardProps {
  image: string;
  header: string;
  content: [];
}

const ComponentTest = (): NextPage => {
  const { t } = useTranslation();
  const [bar, setBar] = useState<boolean>(true);
  const [footer, setFooter] = useState<boolean>(false);
  const afterLoad = (link: unknown, index: number): void => {
    setBar(index === 1);
    setFooter(index === 10);
  };

  const imageUri = data.test.image1;
  return (
    <MainLayout footer={footer} bar={bar}>
      <Head>
        <title>{t('common:site-name')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PagePiling id="test" options={{ afterLoad }}>
        <div className="section">
          <div
            style={{
              backgroundImage: `url(${imageUri})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            <div style={{ marginTop: '10%', textAlign: 'center' }}>
              <HeaderSection />
            </div>
            <div style={{ marginTop: '10%', textAlign: 'center' }}>
              <FooterSection color="white" showIconButton={false} href="/submit" />
            </div>
            <ButtonGroup
              leftButton={{ href: '/submit', name: 'CUSTOM ORDER', backgroundColor: 'orange', color: 'white' }}
              rightButton={{ href: '/submit', name: 'EXISTING INVENTORY', backgroundColor: 'orange', color: 'white' }}
              showIconButton={true}
            />
          </div>
        </div>
      </PagePiling>
    </MainLayout>
  );
};

export default ComponentTest;
