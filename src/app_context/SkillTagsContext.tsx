'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SkillTag } from '@/_types/SkillTag';
import { cachedFetch } from '@/_utils/fetchCache';

interface SkillTagsContextType {
  skills: SkillTag[];
  loading: boolean;
}

const SkillTagsContext = createContext<SkillTagsContextType>({ skills: [], loading: true });

export const useSkillTags = () => useContext(SkillTagsContext);

export const SkillTagsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [skills, setSkills] = useState<SkillTag[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTags = async () => {
    try {
      const data = await cachedFetch("/api/skillTags");
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skill tags:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <SkillTagsContext.Provider value={{ skills, loading }}>
      {children}
    </SkillTagsContext.Provider>
  );
};
