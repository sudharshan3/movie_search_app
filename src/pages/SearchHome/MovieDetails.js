import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody } from 'reactstrap';
import nodataposter from '../../assets/images/nodata.jpg'



class MovieDetails extends React.Component {



    toggleModal = () => {
        this.props.closeDetailsModal()
    }
    render() {
console.log(this.props)

        return (
            <React.Fragment>
                <Card className="dept-details-card">
                    <CardBody>
                        <Modal
                            isOpen={this.props.toggleDetailsModal}
                            toggle={this.toggleModal}
                            className="modal-dialog-centered"
                            size="lg"
                        >
                            <ModalHeader toggle={this.toggleModal} className="modal-colored-header bg-dark">Movie Details</ModalHeader>
                            <ModalBody>
                                <Row>
                                   
                                    {this.props.data &&
                                    <>
                                     <Col md={6}>
                                    <img src= {this.props.data.Poster=="N/A"?nodataposter:this.props.data.Poster}/>
                                     </Col>
                                        <Col md={6} className="dept-details-col">
                                            <p className="text-primary mb-0">Movie Name</p>
                                            <h4>{this.props.data.Title && this.props.data.Title}</h4>
                                 <br/>
                                            <p className="text-primary mb-0">Year</p>
                                            <h4>{this.props.data.Year && this.props.data.Year}</h4>
                                            <br/>
                                            <p className="text-primary mb-0">Type</p>
                                            <h4>{this.props.data.Type && this.props.data.Type}</h4>
                                            <br/>
                                      
                                            {/* <h5>Head/Lead: {this.props.data.head && this.props.data.head}</h5> */}
                                        </Col>
                                        </>
                                    }
                                </Row>
                            </ModalBody>
                        </Modal>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default MovieDetails