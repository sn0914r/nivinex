import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import CollectTestimonialForm from "./pages/CollectTestimonialPage";

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/collect-testimonial" element={<CollectTestimonialForm/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}