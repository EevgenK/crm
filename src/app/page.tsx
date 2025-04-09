import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}

      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
