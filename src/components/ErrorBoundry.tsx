import React from 'react';
// @ts-ignore
import { useRollbar } from '@rollbar/react';

export class ErrorBoundaryClass extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <div>...ups. something went wrong</div>;
    }
    return children;
  }
}

export const ErrorBoundary = ({ children }: any) => {
  return <ErrorBoundaryClass>{children}</ErrorBoundaryClass>;
};
