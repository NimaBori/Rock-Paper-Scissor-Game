import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ results, winner }) => {
  return (
    <div className='picks' >
      <div className='player-pick'>
        <p>Player</p>
        {results[0].tag === 'faHandRock' && <FontAwesomeIcon className='fs' icon={faHandRock} />}
        {results[0].tag === 'faHandPaper' && <FontAwesomeIcon className='fs' icon={faHandPaper} />}
        {results[0].tag === 'faHandScissors' && <FontAwesomeIcon className='fs' icon={faHandScissors} />}
      </div>
      <div className='winner'>{winner}</div>
      <div className='comp-pick'>
        <p>Comp</p>
        {results[1].tag === 'faHandRock' && <FontAwesomeIcon className='fs' icon={faHandRock} />}
        {results[1].tag === 'faHandPaper' && <FontAwesomeIcon className='fs' icon={faHandPaper} />}
        {results[1].tag === 'faHandScissors' && <FontAwesomeIcon className='fs' icon={faHandScissors} />}
      </div>
    </div>
  )
}

export default Footer