export const sortProjects = (projectsData, getProjectName) => {
    if (!projectsData) return [];
    
    const categories = {
      featuredWithOrder: [],
      featuredWithoutOrder: [],
      regularWithOrder: [],
      regularWithoutOrder: []
    };
  
    projectsData.forEach((project) => {
      const category = project.featured ? 
        (project.sorting_order >= 0 ? 'featuredWithOrder' : 'featuredWithoutOrder') :
        (project.sorting_order >= 0 ? 'regularWithOrder' : 'regularWithoutOrder');
      categories[category].push(project);
    });
  
    Object.entries(categories).forEach(([key, items]) => {
      categories[key] = key.includes('WithOrder') ? 
        items.sort((a, b) => a.sorting_order - b.sorting_order) :
        items.sort((a, b) => getProjectName(a).localeCompare(getProjectName(b)));
    });
  
    return [
      ...categories.featuredWithOrder,
      ...categories.featuredWithoutOrder,
      ...categories.regularWithOrder,
      ...categories.regularWithoutOrder
    ];
  };