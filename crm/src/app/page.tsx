import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl m-10">Home page </h1>
      <AddCompanyButton/>
    </main>
  );
}
