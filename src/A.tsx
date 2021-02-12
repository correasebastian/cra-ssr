import loadable from '@loadable/component'
import {Helmet} from "react-helmet";

const B = loadable(() =>{
  return (import('./B') as any)
} ,{ssr:true})
const A = () => (
    <>
    <Helmet>
     <title>Category inside AAAAA</title>
    </Helmet>

    <h3>AAAAAAA</h3>
    <B />
    </>
)


export default A