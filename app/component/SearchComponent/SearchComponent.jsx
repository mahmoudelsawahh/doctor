import dynamic from 'next/dynamic'

const SearchContent = dynamic(() => import('./SearchContent'), {
	ssr : false
  })
  const SearchFilter = dynamic(() => import('./SearchFilter'), {
	ssr : false
  })
  const SearchLength = dynamic(() => import('./SearchLength'), {
	ssr : false
  })

const SearchComponent = () => {
  return (
    <>
            <SearchLength/>
            <div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							<SearchFilter/>						
						</div>
						
						<div class="col-md-12 col-lg-8 col-xl-9">
							<SearchContent/>
							{/* <div class="load-more text-center">
								<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
							</div>	 */}
						</div>
					</div>

				</div>

			</div>		
    </>
  )
}

export default SearchComponent