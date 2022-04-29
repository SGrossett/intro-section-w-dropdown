import { useMediaQuery } from 'react-responsive';
import { Container } from 'react-bootstrap';

import './css/intro.css';
import 'bootstrap/dist/css/bootstrap.css';

import mobileImg from '../../images/image-hero-mobile.png';
import desktopImg from '../../images/image-hero-desktop.png';
import databiz from '../../images/client-databiz.svg';
import audiophile from '../../images/client-audiophile.svg';
import meet from '../../images/client-meet.svg';
import maker from '../../images/client-maker.svg';

function Intro() {
  const desktopView = useMediaQuery({ query: '(min-width: 768px)' })
  const mobileView = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <div class="mt-3">
      <Container className='d-flex justify-content-center'>

        <div class="row reverse content">
          <div class="col-md-5 p-0">            
            <div className='image'>
              {desktopView && <img className='w-100 h-100 img-responsive' src={desktopImg} />}
              {mobileView && <img className='w-100' src={mobileImg} />}
            </div> 
          </div>

          <div class='col-md-1 p-0'></div>

          <div class="col-md-5 content">
            <h1 className='mt-5 headline'>Make <span>remote work</span></h1>
            <p className='mt-3'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className='mt-2 learn'>Learn more</button>
            <div className='row container m-0 mt-5'>
              <div className='col-3 '>
                <img className='w-100' src={databiz} />
              </div>
              <div className='col-3'>
                <img className='w-100 audiophile' src={audiophile} />
              </div>
              <div className='col-3'>
                <img className='w-100' src={meet} />
              </div>
              <div className='col-3'>
                <img className='w-100' src={maker} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro;