import clsx from 'clsx';
import Image from 'next/image';
export interface LogoProps {
  additionalClass?: string;
}
const Logo = ({ additionalClass }: LogoProps) => {
  return (
    <Image
      className={clsx('py-8 mb-11 mx-auto', additionalClass)}
      width={122}
      height={25}
      src="/icons/logo.svg"
      alt="logo"
    />
  );
};

export default Logo;
