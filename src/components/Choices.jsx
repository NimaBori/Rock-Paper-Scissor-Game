import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Choices = ({ onPick }) => {
  return (
    <div className='player-selection'>
      <FaHandRock className='rock' onClick={() => onPick(1, 'faHandRock')} />
      <FaHandPaper className='paper' onClick={() => onPick(2, 'faHandPaper')} />
      <FaHandScissors className='scissors' onClick={() => onPick(3, 'faHandScissors')} />
    </div >
  )
}


export default Choices