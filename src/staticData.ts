const staticData = {
  homeAbout: {
    name: "Dennis Aleksandrov",
    paragraph: "I develop apps for mobile and the web",
    paragraph2: "Full Stack Developer",
  },
};

export const sortProjects = (projectsArr) => {
  const orderOfProjects = [
    "TR Legacy",
    "Movie App",
    "My Bubble",
    "Pao System",
    "Emoji Tack Toes",
    "Simple Pokedex",
    "Crackalackin",
    "Cinematographer's portfolio",
    "Server for Todolist",
    "Starbucks Replica",
    "Portfolio",
  ];
  let sorted: any = [];

  orderOfProjects.forEach((orderedItem) => {
    const [filtered] = projectsArr.filter((item) => item.title === orderedItem);
    if (filtered) sorted.push(filtered);
  });

  return sorted;
};

export default staticData;
