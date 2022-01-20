import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import lagdaemon from '../lagdaemon.jpg'

const Brand = () => {
  return (
      <>
        <Navbar.Brand href="#home">
            <>
                    <img src={lagdaemon} height={100} />
                    &nbsp;&nbsp;&nbsp;
                    LagDaemon Programming
            </>
        </Navbar.Brand>
      </>
  )
}

export default Brand
