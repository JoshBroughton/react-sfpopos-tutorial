import { useNavigate } from 'react-router-dom'
import data from '../../data/sfpopos-data.json'
import './RandomSpace.css'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Random</button>
  )
}

export default RandomSpace