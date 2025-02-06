import { useState, useEffect } from 'react';
import fireSkills from '../data/skills.json';

export const useSkills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setSkillsData(fireSkills);
      setLoading(false);
    };

    fetchSkills();
  }, []);

  return { skillsData, loading, error: null };
};
