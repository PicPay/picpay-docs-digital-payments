import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import styles from './styles.module.css';

const  APIReference = ({ url }) => (
  <div className={styles.APIReference}>
    { ExecutionEnvironment.canUseDOM && <SwaggerUI url={url} /> }
  </div>
)

export default APIReference;
