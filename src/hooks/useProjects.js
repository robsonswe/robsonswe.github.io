import { useState, useEffect } from 'react';
import fireProjects from '../data/projects.json';

export const useProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjectsData(fireProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projectsData, loading, error: null };
};
