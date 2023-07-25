import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#ffb237'
  barColor = '#51E5FF'
/>
  );
};

export default Loader;