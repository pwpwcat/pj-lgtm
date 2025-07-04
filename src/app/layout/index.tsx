import { Footer, Header } from "@/app/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
export default Layout