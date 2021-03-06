import React from 'react'


function Popup({ selected, closePopup }) {
	const url ='https://www.youtube.com/results?search_query=' + selected.Title

	const visit=()=>{
		window.open(url)
	}

	return (
	
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>

				<button className="close" onClick={closePopup}>Close</button>
				<button className="link" onClick={visit}>Watch Trailer </button>
			</div>
		</section>
	)
}

export default Popup