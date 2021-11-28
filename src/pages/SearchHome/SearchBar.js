import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap';
import SearchList from './SearchList';
import { connect } from 'react-redux';
import { getSearchList } from '../../redux/actions';

function SearchBar(props) {
    const [passvalue, setPassvalue] = useState('');
    const [timeoutID, setTimeoutID] = useState();
    useEffect(() => {
        if (props.search && !props.search.search) {
            let data = { search: passvalue };
            props.getSearchList(data);
        }
        if (props.search && props.search.search && props.search.search.Search) {
            props.setSearchdata(props.search.search.Search);
        }
    }, [props.search.search]);

    const handleSearch = (e) => {
        clearTimeout(timeoutID);
        let data = { search: e };
        setPassvalue(e);
        const timeout = setTimeout(() => props.getSearchList(data), 500);        
        setTimeoutID(timeout);

        if (e === '') {
            props.setSearchdata(null);
        }
    };

    return (
        <React.Fragment>
            <Card className="mt-3 rounded-pill p-0">
                <CardBody className="py-1 px-2 d-flex justify-content-start align-items-center">
                    <i className="mdi mdi-magnify widget-icon rounded-circle bg-light text-dark"></i>
                    <Input
                        className="form-control form-control-lg rounded-pill border-0 "
                        type="text"
                        name="search"
                        id="searchmovies"
                        placeholder="Search Movies..."
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.Search,
    };
};
export default connect(mapStateToProps, { getSearchList })(SearchBar);
