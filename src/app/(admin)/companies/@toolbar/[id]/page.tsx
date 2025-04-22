import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

export interface PageProps {
  params: { id: string };
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
