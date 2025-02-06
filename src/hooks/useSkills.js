import fireSkills from '../data/skills.json';

export const useSkills = () => ({
  skillsData: fireSkills,
  loading: false,
  error: null,
});
