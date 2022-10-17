import Footer from "./Footer";
import Header from "./Header";
import SectionContainer from "./SectionContainer";

export default function SiteLayout({ children }) {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
}
