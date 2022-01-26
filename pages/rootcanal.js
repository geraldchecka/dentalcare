import Layout from '../components/layout';
import { SectionGroup, SectionItem } from '../styles/banner.styled';

export default function RootCanal() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <p>Root Canal</p>
        </SectionItem>
      </SectionGroup>
    </>
  );
}