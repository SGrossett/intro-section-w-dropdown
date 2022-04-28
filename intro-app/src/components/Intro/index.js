import { Container } from 'react-bootstrap';

import './css/intro.css';
import 'bootstrap/dist/css/bootstrap.css';

import mobileImg from '../../images/image-hero-mobile.png';
import deskTopMobile from '../../images/image-hero-desktop.png';

function Intro() {
  return (
    <div class="">
      <Container className='d-flex justify-content-center'>

        <div class="row content">
          <div class="col-sm-6 p-0">            
            <div>
              <img className='w-100' src={mobileImg} />
            </div>
          </div>

          <div class='col-sm-1'>
            <div class="col-sm-5 content">
              <h1 className='mt-5 headline'>Make remote work</h1>
              <p className='mt-3'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <button className='mt-2 learn'>Learn more</button>
              <div>logos</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro;