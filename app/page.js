import Banner from './Banner/Banner'
import ClinicCategory from './Banner/Clinic-category/ClinicCategory'
import BookDoctor from './BookDoctor/BookDoctor'
import Footer from './Footer/Footer'

const page = () => {
  return (
    <>
      <Banner/>
      <ClinicCategory/>
      <BookDoctor/>
      <Footer/>
    </>
  )
}

export default page