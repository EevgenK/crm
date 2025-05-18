import HomeContext from './components/home-context';
import Logo from './components/logo';

export default function Home() {
  return (
    <>
      {' '}
      <header className="bg-gray-900 text-white font-semibold text-lg min-h-18 px-4 py-4 flex items-center justify-center">
        <div className="flex-col  gap-1">
          <Logo additionalClass="mb-2" />
          <span>CRM for Companies provides Sales</span>
        </div>
      </header>
      <main className="bg-gray-400 h-svh">
        <h1 className="text-xl  text-white text-center mb-4">Home page</h1>
        <p className=" text-white text-center mb-4">
          Follow the links bellow for check the functionality of this CRM{' '}
        </p>
        <HomeContext />
      </main>
    </>
  );
}
