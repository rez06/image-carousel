const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = numbers.map(function (num) {
	return num * 2
});

const movies = [
	{
		title: 'Amadeus',
		score: 99
	},
	{
		title: 'Stand By Me',
		score: 85
	},
	{
		title: 'Parasite',
		score: 90
	},
	{
		title: 'Alien',
		score: 90
	}
]

	
const titles = movies.map(function (movie) {
	return movie.title
})

const score = movies.map(function (movie) {
	return movie.score
})