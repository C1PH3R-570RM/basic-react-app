import React from 'react';
import { Container, Row, Col} from 'reactstrap';



const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={12}>
                        <p className='copyright'>&copy; 2023 All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
       
    );
};

export default Footer;