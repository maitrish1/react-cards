import './App.css';
import Card from './components/Card';
function App(props) {
  return (
    <>
    <div className='card-parent'>
    <Card title='1st' heading='1st heading' desc='1st description' />

    <Card title='2nd' heading='2nd heading' desc='2nd description' />
    <Card title='3rd' heading='3rd heading' desc='3rd description' />
    <Card title='4th' heading='4th heading' desc='4th description' />
    <Card title='5th' heading='5th heading' desc='5th description' />
    <Card title='6th' heading='6th heading' desc='6th description' />

    <Card title='7th' heading='7th heading' desc='7th description' />

    <Card title='8th' heading='8th heading' desc='8th description' />

    
    
    </div>
    </>
      
  );
}

export default App;
