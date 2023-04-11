import { useEffect, useState } from 'react';

export default function useLanguage() {
    const [lang, setLang] = useState('default');
  
    useEffect(() => {
      const httpAcceptedLang = navigator.languages ? navigator.languages[0] : null;
      const browserLang = navigator.language || navigator.userLanguage;
      let detectedLang = httpAcceptedLang || browserLang || 'en-US';
  
      if (detectedLang.startsWith('pt')) {
        detectedLang = 'pt';
      } else {
        detectedLang = 'default';
      }
  
      setLang(detectedLang);
    }, []);
  
    return lang;
  }
  
