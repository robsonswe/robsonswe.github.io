import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import fireProjects from '../data/projects.json';

export const useProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) throw new Error(supabaseError.message);

        // Use Supabase data or fallback
        setProjectsData(data?.length > 0 ? data : fireProjects);
      } catch (err) {
        setError(err.message);
        setProjectsData(fireProjects); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projectsData, loading, error };
};