const staticData = {
  homeAbout: {
    name: 'Dennis Aleksandrov',
    paragraph: "I develop apps for mobile and the web",
    paragraph2: 'Mern Developer',
  }
}

export const sortProjects = (projectsArr) => {
  const orderOfProjects = ['Portfolio', 'My Bubble', "Pao System", 'Emoji Tack Toes', 'Simple Pokedex', 'Crackalackin', "Cinematographer's portfolio", 'Server for Todolist', 'Starbucks Replica']
  let sorted: any = []

  orderOfProjects.forEach(orderedItem => {
    const [filtered] = projectsArr.filter(item => item.title === orderedItem)
    if (filtered) sorted.push(filtered)
  });

  return sorted
}

export default staticData