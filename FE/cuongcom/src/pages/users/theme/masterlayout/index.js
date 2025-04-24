import { memo } from 'react';
import Footer from '../footer';
import Header from '../header';
const Masterlayout =  ({children, ...props}) => {
    return ( 
    <div {... props}> 
    <Header />
   {children }
    <Footer />
    </div> 
    ) ;
} ; 
export default memo(Masterlayout) ;