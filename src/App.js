import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from './pages/SumOfNatural';
import SumOfDigits from './pages/SumOfDigits';
import CheckWithinRange from './pages/CheckWithinRange';
import RightTriangle from './pages/RightTriangle';
import IsoscelesTriangle from './pages/IscocelesTriangle';
import NumberRightTriangle from './pages/NumberRightTriangle';
import GetLargest from './pages/GetLargest';
import VowelCount from './pages/VowelCount';
import Triangle from './pages/Triangle';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural-numbers' element={<SumOfNatural />} />
        <Route path='/sum-of-digits' element={<SumOfDigits />} />
        <Route path='/check-within-range' element={<CheckWithinRange />} />
        <Route path='/right-triangle' element={<RightTriangle />} />
        <Route path='/isosceles-triangle' element={<IsoscelesTriangle />} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle />} />
        <Route path='/get-largest' element={<GetLargest />} />
        <Route path='/vowel-count' element={<VowelCount />} />
        <Route path='/triangle' element={<Triangle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;