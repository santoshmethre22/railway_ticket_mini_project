
import HomePage from './pages/HomePage';
import AddPassenger from './pages/AddPassenger';
import AddTrain from './pages/AddTrain';
import Razor from './pages/Razor';
import AddTicket from './pages/AddTicket';
import Analytics from './pages/Analytics';
import Train from './pages/train';
import Startpage from './pages/startpage';
import TicketDeletion from './pages/cancel';
import UserLogin1 from './pages/adminlogin';
import About from './pages/About';
import  History from './pages/History';
import AdminLogin from './pages/adminlogin';
import UserLogin from './pages/userlogin';
import PnrForm from './pages/Pnr';
import FoodList from './pages/page';
import  AddTrainForm from './pages/Admin1';
import  CustomerTable from './pages/Admin2';
import  SeatCountComponent from './pages/Admin3';
import  DeleteTrain from './pages/Admin4';
import Signup from './pages/signpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element = {<Startpage/>}/>
      <Route path="/history" element={<History />} />
      <Route path="/admin3" element={<SeatCountComponent />} />
      <Route path="/admin2" element={< CustomerTable />} />
      <Route path="/food" element={<FoodList />} />
      <Route path="/pay" element={<Razor />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin1" element={<AddTrainForm/>} />
      <Route path="/admin-login" element={<UserLogin1/>} />
      <Route path="/train-ctrl" element={<Train />} />
      <Route path="/add-passenger" element={<AddPassenger />} />
      <Route path="/cancel" element={<TicketDeletion />} />
      <Route path="/add-train" element={<AddTrain />} />
      <Route path="/add-ticket" element={<AddTicket />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/start-page" element={<HomePage />} />
      <Route path="/pnr-status" element={<PnrForm />} />
      <Route path="/delete-train" element={<DeleteTrain />} />
      <Route path="/register" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;