const WAKATIME_API_KEY = 'your-wakatime-api-key';

export const fetchCodingStats = async () => {
  try {
    const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        'Authorization': `Basic ${btoa(WAKATIME_API_KEY)}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return null;
  }
}; 