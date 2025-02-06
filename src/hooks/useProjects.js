import fireProjects from '../data/projects.json';

export const useProjects = () => ({
  projectsData: fireProjects,
  loading: false,
  error: null,
});
