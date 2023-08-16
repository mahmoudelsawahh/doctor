const SearchFilter = () => {
  return (
    <>
        <div class="card search-filter">
								<div class="card-header">
									<h4 class="card-title mb-0">تصفية البحث</h4>
								</div>
								<div class="card-body">
								<div class="filter-widget">
									<div class="cal-icon">
										<input type="text" class="form-control datetimepicker" placeholder="التاريخ"/>
									</div>			
								</div>
								<div class="filter-widget">
									<h4>النوع</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="gender_type" checked/>
											<span class="checkmark"></span> طبيب 
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="gender_type"/>
											<span class="checkmark"></span> طبيبة
										</label>
									</div>
								</div>
								<div class="filter-widget">
									<h4>التخصص</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" checked/>
											<span class="checkmark"></span> جراحة المسالك البولية
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist" checked/>
											<span class="checkmark"></span>  الأعصاب
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist"/>
											<span class="checkmark"></span> أسنان
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist"/>
											<span class="checkmark"></span> تقويم العظام
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist"/>
											<span class="checkmark"></span>  القلب
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist"/>
											<span class="checkmark"></span> العظام
										</label>
									</div>
								</div>
									<div class="btn-search">
										<button type="button" class="btn btn-block w-100">بحث</button>
									</div>	
								</div>
							</div>	
    </>
  )
}

export default SearchFilter