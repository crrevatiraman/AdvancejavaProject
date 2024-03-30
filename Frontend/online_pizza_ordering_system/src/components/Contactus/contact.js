import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Image } from 'react-bootstrap';
import pic1 from './teamimag2/prem.jpg'
import pic2 from './teamimag2/siddhant.jpg'
import pic3 from './teamimag2/Revati.jpg'
import pic4 from './teamimag2/dinesh.jpg'
import pic5 from './teamimag2/rohini.jpg'
export default function Contact() {


    const [formData, setFormData] = useState({

        Name: '',
        Phone: '',
        Email: ''
    });

    // to print inserted sucessful or not message on page
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData);

        try {

            // const result = await saveStudent(formData);
            // setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
            }, 2000);

            //console.log(result.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
        <Container style={{ paddingTop: '20px'}}>
           
            <Container fluid className="align-items-center justify-content-center" >
                {/* <Row><Image src={banner2}></Image></Row> */}
                <h1>Our Team</h1>
                <Row className="mt-5 align-items-center justify-content-center" style={{ color: 'white', marginLeft:'50px' }} >

                    <Col xs={4} md={4}>
                        <Image style={{ height: '300px' }} src={pic1} rounded />
                        <h3>Prem Jadhav</h3>
                        <h5>premrohidasjadhav3295@gmail.com</h5>
                        <h5>+91 7378506062</h5>
                    </Col>

                    <Col xs={4} md={4}>
                        <Image style={{ height: '300px' }} src={pic2} rounded />
                        <h3>Siddhant Deshmukh</h3>
                        <h5>ssiddhantdeshmukh@gmail.com</h5>
                        <h5>+91 9404404418</h5>
                    </Col>
                    <Col xs={4} md={4}>
                        <Image style={{ height: '300px' }} src={pic3} rounded />
                        <h3>Revatiraman Chaudhari</h3>
                        <h5>crrevatiraman@gmail.com</h5>
                        <h5>+91 8261896077</h5>
                    </Col>

                    <Col xs={4} md={4} style={{marginTop:'50px' }}>
                        <Image style={{ height: '300px' }} src={pic4} rounded />
                        <h3>Dinesh Kedari</h3>
                        <h5>kedaridinesh20@gmail.com</h5>
                        <h5>+91 9890037100</h5>
                    </Col>

                    <Col xs={4} md={4} style={{ marginTop:'50px' }}>
                        <Image style={{ height: '300px' }} src={pic5} rounded />
                        <h3>Rohini Manale</h3>
                        <h5>manalerohini2405@gmail.com</h5>
                        <h5>+91 8390728262</h5>
                    </Col>
                </Row>

            </Container>


                <Row className='mt-3' style={{ height: '50px' }}>
                    <Col lg={5}>
                    </Col>
                    <Col lg={5}>

                    </Col>
                </Row>

            </Container>
       
        </div>
    );
};

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function Contactus() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="1" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="1" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }
