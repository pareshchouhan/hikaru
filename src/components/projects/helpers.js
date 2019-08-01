import { knuthShuffle } from 'knuth-shuffle';
import projects from '../../data/projects';

export const sortProjects = (projects, sortValue) => {
  if (sortValue === 'created-asc') {
    /* oldest */
    projects = projects.sort((a, b) => {
      return a.id-b.id;
    });
  } else if (sortValue === 'created-des') {
    /* newest */
    projects = projects.sort((a, b) => {
      return b.id-a.id;
    });
  } else if (sortValue === 'random') {
    /* random */
    projects = knuthShuffle(projects);
  }

  return projects;
};

export const tagList = () => {
  let tags = [];
  projects.forEach(project => {
    tags = tags.concat(project.tags);
  });
  return [...new Set(tags)].map(name => ({ name }));
};

// knuth shuffle: https://stackoverflow.com/a/2450976
export const shuffle = array => {
	let currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};