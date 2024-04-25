function RootLayouts({ children }) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
  export default RootLayouts