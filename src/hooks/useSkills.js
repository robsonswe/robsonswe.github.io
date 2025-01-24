import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import fireSkills from '../data/skills.json';

export const useSkills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('skills')
          .select('*')
          .order('created_at', { ascending: true });

        if (supabaseError) throw new Error(supabaseError.message);

        // Use Supabase data if available, otherwise use fallback
        setSkillsData(data?.length > 0 ? data : fireSkills);
      } catch (err) {
        setError(err.message);
        setSkillsData(fireSkills); // Fallback to local data
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skillsData, loading, error };
};