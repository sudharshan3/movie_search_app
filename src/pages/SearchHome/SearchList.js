import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardText,
    CardGroup,
} from 'reactstrap';

import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import nodataposter from '../../assets/images/nodata.jpg'
import "./styles.css"
import searchengine from '../../assets/images/Search Engine_Flatline.svg'
import LoaderWidget from '../../components/Loader';
import MovieDetails from './MovieDetails';

const SearchList = (props) => {
  

    const history = useHistory();
    const [toggleDetailsModal, setToggleDetailsModal] = useState(false);

    const [searchdetailData, setSearchdetailData] = useState(null);
    const [index, setIndex] = useState(null);

  

    const handleDetailsModal = (row) => {
        setToggleDetailsModal(true);
        setSearchdetailData(row);
      
       
    };
    const closeDetailsModal = () => {
        setToggleDetailsModal(false);
        setSearchdetailData(null);
    };

   


 



    return (
        <>
            {props.searchdata && props.searchdata.length > 0 ? (
                <Card>
                    <CardBody>
                        <React.Fragment>
                            <Row>
                                <Col className="text-left mb-1">
                                    <h5 className="text-uppercase">Search results </h5>
                                </Col>
                            </Row>

                            <Row>


                                {props.searchdata.map((row, index) => {
                                    return (
                                        <Col sm={1} md={4} lg={2} key={index}>
                                            <Card className="customcard" onClick={e=>handleDetailsModal(row)}>
                                                <CardImg src={row.Poster=="N/A"?nodataposter: row.Poster } />
                                                <CardBody>
                                                    <CardTitle tag="h4">{row.Title}</CardTitle>
                                                    <CardText>{row.Year}</CardText>
                                                    <span className={row.Type ==="movie"?"badge badge-danger": "badge badge-dark"}>{row.Type}</span>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>

                            {/* Details Modal */}
                            {toggleDetailsModal &&
                            <MovieDetails toggleDetailsModal={toggleDetailsModal} closeDetailsModal={closeDetailsModal}
                                data={searchdetailData} />
                        }
                        </React.Fragment>
                    </CardBody>
                </Card>
            ) : (
                <div className="text-center"> <img src={searchengine}/></div>
           ) }
            <ToastContainer />
        </>
    );
};

export default SearchList;
