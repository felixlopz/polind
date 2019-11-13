
const placesElement = document.querySelector ('.places');

const places = [
	{
		name: 'poznan',
		place: 'wielkopolskie',
		img: 'poznan',
	},{
		name: 'warsaw',
		place: 'Mazowieckie',
		img: 'warsaw',
	},{
		name: 'wroclaw',
		place: 'Dolnoslaskie',
		img: 'wroclaw',
	},{
		name: 'karpacz',
		place: 'Dolnoslaskie',
		img: 'karpacz',
	},{
		name: 'Dolina Olczyska',
		place: 'Malopolskie',
		img: 'dolina-olczyska',
	},{
		name: 'kozy',
		place: 'Slaskie',
		img: 'kozy',
	},
];

function initCards(places){
	placesElement.innerHTML = `${places.reduce ((html , place) => {
		return html + getCardTemplate (place);
	},'')}`
}

function getCardTemplate({name,place,img}){
	return `
		<div class="col-md-4 card__column">
			<div class="card">
	      <div class="card__header p-2">
	        <figure class="card__figure">
	          <img class="card__image" src="./assets/${img}.png" alt="nice picture of poland">
	        </figure>
	      </div>
	      <div class="card__body text-center pb-4">
	        <h3 class="card__name">${name}</h3> 
	        <p class="card__place">${place}</p>
	        <a href="#" class="btn card__btn mt-4">view offers</a>
	      </div>
      </div>		
	  </div>
	`
}

initCards(places);
