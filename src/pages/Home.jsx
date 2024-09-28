import React from 'react';
import { Grid, Column, Link, AspectRatio } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './Home.scss';
import colorlogo from '../assets/img/colorlogo.png';
import openness from '../assets/img/Open-source.png';
import thinking from '../assets/img/Connect.png';
import agile from '../assets/img/Fast.png';
import collab from '../assets/img/Collaborate-with-teams.png'
import ProjectCardA from '../components/ProjectCard/ProjectCardA';
import ProjectCardB from '../components/ProjectCard/ProjectCardB'
import styled from 'styled-components';

import nomNomImage from '../assets/img/Nomnom-1.png';

import marketResearchImage from '../assets/img/MarketResearch.jpg';
import gallerypic1 from '../assets/img/computer_desk.jpg';
import gallerypic2 from '../assets/img/cystal_ball.jpg';
import gallerypic3 from '../assets/img/3Dmodel.png';
import gallerypic4 from '../assets/img/data_visual.jpg';

const StyledGrid = styled(Grid)`
  --cds-grid-gutter: 0; 
`;

const Home = () => {
  return (
    <div className="home-page">

      {/*  hero section */}
      <section className="intro-section">
        <Grid>
          <Column lg={12} md={6} sm={4}>
            <h1 className="intro-title">
              Connecting the Dots among<br />
              Business, Technology and Design
            </h1>
            <Link href="/about" className="meet-link">
              Meet Gracie Guan <ArrowRight size={20} />
            </Link>
          </Column>
          <Column lg={4} md={2} sm={4} >
            <img className='image' src={colorlogo} alt='gracie logo'/>
          </Column>
        </Grid>
      </section>
      <section className="skills-section">
        <Grid condensed>
          <Column sm={4} md={2} lg={4} className="skill-column">
            <div className='skillWrapper'>
              <div className="skill-content">
                <h3>Empathetic Openness</h3>
                <p>Opening windows to let in fresh ideas</p>
              </div>
              <img className='info-graph' src={openness} alt='openness'/>
            </div>
          </Column>
          <Column sm={4} md={2} lg={4} className="skill-column">
            <div className='skillWrapper'>
              <div className="skill-content">
                <h3>Integrative Thinking</h3>
                <p>Bridging ideas across disciplines to find comprehensive solutions</p>
              </div>
              <img className='info-graph' src={thinking} alt='integrative thinking'/>
              </div>
          </Column>
          <Column sm={4} md={2} lg={4} className="skill-column">
            <div className='skillWrapper'>
              <div className="skill-content">
                <h3>Adaptive Agility</h3>
                <p>Rolling with the changes and picking up new tricks fast</p>
              </div>
              <img className='info-graph' src={agile} alt='adaptive agility'/>
            </div>
          </Column>
          <Column sm={4} md={2} lg={4} className="skill-column">
            <div className='skillWrapper'>
              <div className="skill-content">
                <h3>Collaborative Mindset</h3>
                <p>Teaming up and making sure everyone's voice is heard</p>
              </div>
              <img className='info-graph' src={collab} alt='collaborative mindset'/>
            </div>
          </Column>
        </Grid>
      </section>

        {/*  project section */}
      <section className='des-dev-project'>
        <Grid className='des-header'>
          <Column lg={8} md={4} sm={4}>
            <h1> 
              Design and Development
            </h1>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <p className='body-compact-02'> 
            Blending design and coding is like being a bilingual artist in the digital world. This dual fluency allows me to paint with pixels and sculpt with code, crafting innovative solutions that speak to both form and function. My ability to switch between these languages helps me bridge gaps in diverse teams, turning potential barriers into creative springboards.
            </p>
          </Column>
        </Grid>

        <Grid condensed className='des-cards'>
          <ProjectCardA
            title="NOMNOM"
            description="A mobile application that addresses common frustrations in finding accurate food information by converting user-uploaded menu photos into accessible, text-based formats using AI."
            imageSrc={nomNomImage}
            link="/projects/nomnom"
            tags={['Mobile App']}
          />

          <ProjectCardA
            title="TCD Renters Network"
            description="A centralised website to coordinate campaigns around issues faced by the collective student renter community at Trinity College Dublin."
            imageSrc={nomNomImage}
            link="/projects/TCDRenters"
            tags={['Website']}
          />
        </Grid>
      </section>

      <section className='mkt-project'>
        <Grid className='mkt-header'>
          <Column lg={8} md={4} sm={4}>
            <h1> 
              Marketing
            </h1>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <p className='body-compact-02'> 
            My years in marketing have sharpened my eye for solutions that match business goals. It's like walking a tightrope, carefully balancing customer wants on one side and company needs on the other. This balance is key to my approach. My projects show how I tackle real-world business challenges.
            </p>
          </Column>
        </Grid>

        <StyledGrid condensed className='des-cards'>
          <ProjectCardB
            title="Market Research for R&D"
            description="market research for electric scooter products, conducted in-depth user and distributor interviews, and formulated firsthand market insight and analysis for the R&D department."
            link="/projects/market-research"
            imageSrc={marketResearchImage}
          />

          <ProjectCardB
            title="Product Launch"
            description="market research for electric scooter products, conducted in-depth user and distributor interviews, and formulated firsthand market insight and analysis for the R&D department."
            link="/projects/market-research"
            imageSrc={marketResearchImage}
          />

          <ProjectCardB
            title="Process Improvement SOP"
            description="market research for electric scooter products, conducted in-depth user and distributor interviews, and formulated firsthand market insight and analysis for the R&D department."
            link="/projects/market-research"
            imageSrc={marketResearchImage}
          />

          <ProjectCardB
            title="Integrated Marketing Campaign"
            description="market research for electric scooter products, conducted in-depth user and distributor interviews, and formulated firsthand market insight and analysis for the R&D department."
            link="/projects/market-research"
            imageSrc={marketResearchImage}
          />
        </StyledGrid>
      </section>

      {/*  gallery section */}
      <section className='gallery-section'>
        <Grid className='gallery-text'>
          <Column lg={8} md={6} sm={4} className='g-text'>
            <h1 className='g-headline'>Gallery</h1>
            <p>
              Welcome to my visual playground - Here, pixels meet polygons, and code brings imagination to life. From smooth 3D shapes to eye-catching computer graphics, each piece shows how creativity and code can work hand in hand.
            </p>
          </Column>
          <Column lg={8} md={6} sm={4} className='g-link'>
            <Link href="#" renderIcon={ArrowRight}>
              View More
            </Link>
          </Column>
        </Grid>

        <div className='gallery-grid'>
          <div className="gallery-item gallery-item-large">
            <img src={gallerypic1} alt="Gallery item 1" />
          </div>
          <div className="gallery-item gallery-item-small">
            <img src={gallerypic2} alt="Gallery item 2" />
          </div>
          <div className="gallery-item gallery-item-small">
            <img src={gallerypic3} alt="Gallery item 3" />
          </div>
          <div className="gallery-item gallery-item-large">
            <img src={gallerypic4} alt="Gallery item 4" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;