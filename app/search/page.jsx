import dynamic from 'next/dynamic'
const SearchComponent = dynamic(() => import('../component/SearchComponent/SearchComponent'), {
  ssr : false
})
const Search = () => {
  return (
    <>
        <SearchComponent/>
    </>
  )
}

export default Search