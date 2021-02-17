import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import styles from './styles.module.css';

function APIReference({children, minHeight, url}) {
  return (
      <div className={styles.APIReference}> 

        { ExecutionEnvironment.canUseDOM && 
          <SwaggerUI url="/swagger/checkout.json" />
        }
        
      </div>



/*     <div className={styles.browserWindow} style={{minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>{children}</div>
    </div> */
  );
}

export default APIReference;