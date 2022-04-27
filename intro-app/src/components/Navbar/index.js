import { Menu, Transition } from '@headlessui/react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState, Fragment } from 'react'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper';

import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css';

import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import todo from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';



function IntroNav() {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <div>
      <Navbar bg='info'>
        <Navbar.Brand>snap</Navbar.Brand>
        <Nav>
          <Nav.Link href='#'>
            <Popover className="position-relative">
              {({ open }) => (
                <>
                  <Popover.Button className='dropdown-link headless-link'>
                    <span>Features
                      <span  className='ml-05'>
                        { open ? (<img src={arrowUp} />) : (<img src={arrowDown} /> )}
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
                        { open ? (<img src={arrowUp} />) : (<img src={arrowDown} /> )}
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
          <Nav.Link href='#'>Login</Nav.Link>
          <Nav.Link href='#'>Register</Nav.Link>
        </Nav>
      </Navbar>

      <p>Testing testing</p>
      <Navbar>
        <Nav>
          <NavDropdown title="proucts">
            <NavDropdown.Item href="#">Tea</NavDropdown.Item>
            <NavDropdown.Item href="#">Coffee</NavDropdown.Item>
            <NavDropdown.Item href="#">Juice</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
       
    </div>
  )
}

export default IntroNav;

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
