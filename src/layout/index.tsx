import React from 'react'
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header'

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }): JSX.Element => {

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout