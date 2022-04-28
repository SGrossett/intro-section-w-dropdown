import Media from 'react-media';
import { usePopper } from 'react-popper';
import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Popover } from '@headlessui/react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css';

import OffCanvasNav from '../OffcanvasNav/index';
import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import todo from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';

function InfoNav() {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <div>
      <Media queries={{
        small: "(max-width: 575px)",
        medium: "(min-width: 576px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && <OffCanvasNav /> }
            {matches.medium && 
              <Navbar collapseOnSet expand='sm' bg='light'>
                <Container className='m-nav-container'>
                  <Navbar.Brand>
                    <h2 className='snap-right-margin'>snap</h2>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse 
                    id='responsive-navbar-nav'
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                  >
                    <Nav className='me-auto'>
                    
                      <Nav.Link href='#'>
                        <Popover className="position-relative">
                          {({ open }) => (
                            <>
                              <Popover.Button className='dropdown-link headless-link'>
                                <span>Features
                                  <span  className='ml-05'>
                                    { open ? (<img className='link-arrows' src={arrowUp} />) : (<img className='link-arrows' src={arrowDown} /> )}
                                  </span>
                                </span>
                                
                              </Popover.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel 
                                  ref={setPopperElement}
                                  style={styles.popper}
                                  {...attributes.popper}
                                  className="postion-absolut"
                                >                
                                  <div className="dropdown dropdown-menu show">
                                    <div>
                                      {features.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          className="d-flex align-items-center dropdown-item"
                                        >
                                          <div className="d-flex items-center justify-content-center">
                                            <img
                                              src={item.icon}
                                              aria-hidden="true" 
                                            />
                                          </div>
                                          <div className="ml-075">
                                              {item.name}
                                          </div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </Nav.Link>
                      <Nav.Link href='#'>
                        <Popover className="position-relative">
                          {({ open }) => (
                            <>
                              <Popover.Button className='dropdown-link headless-link'>
                                <span>Company
                                  <span  className='ml-05'>
                                    { open ? (<img className='link-arrows' src={arrowUp} />) : (<img className='link-arrows' src={arrowDown} /> )}
                                  </span>
                                </span>
                                
                              </Popover.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel 
                                  ref={setPopperElement}
                                  style={styles.popper}
                                  {...attributes.popper}
                                  className="postion-absolut"
                                >                
                                  <div className="dropdown dropdown-menu show">
                                    <div>
                                      {company.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          className="d-flex align-items-center dropdown-item"
                                        >
                                          <div className="ml-075">
                                              {item.name}
                                          </div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </Nav.Link>
                      <Nav.Link href='#'>Careers</Nav.Link>
                      <Nav.Link href='#'>About</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href='#' >Login</Nav.Link>
                      <Nav.Link href='#' className="ml-102 px-105 border border-dark rounded-button register-padding">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            }
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default InfoNav;


const features = [
  {
    name: 'Todo List',
    href: '##',
    icon: todo,
  },
  {
    name: 'Calendar',
    href: '##',
    icon: calendar,
  },
  {
    name: 'Reminders',
    href: '##',
    icon: reminders,
  },
  {
    name: 'Planning',
    href: '##',
    icon: planning,
  },
]

const company = [
  {
    name: 'History',
    href: '##',
  },
  {
    name: 'Our Team',
    href: '##',
  },
  {
    name: 'Blog',
    href: '##',
  }
]
