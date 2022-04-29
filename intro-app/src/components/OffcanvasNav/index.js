import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Nav, Navbar, Offcanvas, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import todo from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';

function OffCanvasNav() {
  return (
    <Navbar collapseOnSet expand='sm' bg='light'>
      <Container fluid>
        <Navbar.Brand className='mr-2'>
          <h2 className='ml-102'>snap</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas 
          id='offcanvasNavbar'
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
            <Nav>
              <Nav.Link href='#'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="dropdown-link headless-link">
                      <span>Features
                        <span  className='ml-05'>
                          { open ? (<img alt="up arrow" src={arrowUp} />) : (<img alt="down arrow" src={arrowDown} /> )}
                        </span>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-2 pt-2">
                    <div>
                              {features.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="d-flex align-items-center dropdown-item pt-2 text-gray"
                                >
                                  <div className="d-flex items-center justify-content-center">
                                    <img alt=""
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
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              </Nav.Link>
              <Nav.Link href='#'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="dropdown-link headless-link">
                      <span>Company
                        <span  className='ml-05'>
                          { open ? (<img alt="up arrow" src={arrowUp} />) : (<img alt="down arrow" src={arrowDown} /> )}
                        </span>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-0 pt-2">
                    <div>
                      {company.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="d-flex align-items-center dropdown-item pt-2 text-gray"
                        >
                          <div className="ml-075">
                              {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              </Nav.Link>
              <Nav.Link href='#' className='text-gray'>Careers</Nav.Link>
              <Nav.Link href='#' className='text-gray'>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#' className='text-gray d-flex justify-content-center mt-3'>Login</Nav.Link>
              <Nav.Link href='#' className='text-gray d-flex justify-content-center mt-1 border border-dark rounded-button'>Register</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffCanvasNav;


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
