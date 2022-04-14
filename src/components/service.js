import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Service = ({ service }) => (
    <div className="w-1/2 text-center mt-5 mb-5 mx-auto" data-sal="fade" data-sal-easing="ease-in-cubic" data-sal-duration="400">
        <div className="mx-4">
            <Img fluid={ service.image.fluid } alt="service item" className=""/>
        </div>
        <h3 className="font-bold lg:mb-4 mb-2">{ service.title }</h3>
        <p>{ service.description.description }</p>
    </div>
);

Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;