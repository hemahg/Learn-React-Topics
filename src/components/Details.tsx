import { Button } from '@patternfly/react-core';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

export const Details: FunctionComponent = () => {

  let history = useHistory();

  const onClickBackButton = () => {
    console.log(history)
    history.push("/")
  }
  return (
    <>
      <div>
        details page
      </div>
      <Button onClick={onClickBackButton}>Back to Person list</Button>
    </>
  )
}
