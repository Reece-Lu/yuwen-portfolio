import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ProjectAPIs = () => {
    return (
        <div>
            <SwaggerUI url="https://www.meetyuwen.com/api/openapi.json" />
        </div>
    );
};

export default ProjectAPIs;
