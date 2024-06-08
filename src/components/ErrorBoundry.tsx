import React, {Component, FC, PropsWithChildren} from 'react';
import ErrorFallback from './ErrorFallback';

type PropsType = PropsWithChildren & {
  ErrorUI?: FC;
  extraErrorData?: any;
};

type StateType = {
  hasError: boolean;
};

class ErrorBoundaryWrapper extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch = () => {
    this.setState({hasError: true});
  };

  render() {
    const {children, ErrorUI = ErrorFallback} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      return <ErrorUI />;
    }
    return children;
  }
}

const ErrorBoundary: FC<PropsType> = ({children, extraErrorData, ErrorUI}) => {
  return (
    <ErrorBoundaryWrapper extraErrorData={extraErrorData} ErrorUI={ErrorUI}>
      {children}
    </ErrorBoundaryWrapper>
  );
};
export default ErrorBoundary;
