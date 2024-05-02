import React, { useEffect } from 'react';

import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { NotAuthorized } from '@patternfly/react-component-groups';

const NoPermissionsPage = () => {
  const { appAction } = useChrome();

  useEffect(() => {
    appAction('no-permissions');
  }, []);

  return (
    <Main>
      <NotAuthorized serviceName="Developer Sandbox" />
    </Main>
  );
};

export default NoPermissionsPage;
