import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const OpenAPI = () => {
    return (
        <div>
            <SwaggerUI url="http://localhost:8000/openapi.json" />
        </div>
    );
};

export default OpenAPI;
