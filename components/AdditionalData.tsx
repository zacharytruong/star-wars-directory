import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdditionalData({ url }: { url?: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [additionalData, setAdditionalData] = useState<string>();

  const getAdditionalData = async (url?: string) => {
    setIsLoading(true);
    if (!url) {
      return undefined;
    }
    try {
      const data = await axios.get(url);
      const response = data.data.name as string;
      setAdditionalData(response);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAdditionalData(url);
  }, [url]);

  return (
    <div>
      {isLoading && <div className="skeleton h-4 w-full text-primary"></div>}
      {!isLoading && <span className="text-secondary">{additionalData}</span>}
    </div>
  );
}
