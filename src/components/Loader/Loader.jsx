import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
