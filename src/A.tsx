import loadable from '@loadable/component'
const B = loadable(() =>{
  return (import('./B') as any)
} ,{ssr:true})
const A = () => (
    <>
    <h3>AAAAAAA</h3>
    <B />
    </>
)


export default A