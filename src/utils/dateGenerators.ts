
// Helper function to generate more realistic dates with better distribution
export const generateRealisticDate = (id: number, totalBrands: number): string => {
  // Create a date starting from today
  const startDate = new Date();
  
  // Spread drops over the next 6 months with a realistic distribution pattern
  // Earlier brands get dates closer to today, later brands get dates further in the future
  
  // Calculate days to add - distribute non-linearly to avoid clustering
  let daysToAdd: number;
  
  // Normalize the id to a value between 0 and 1
  const normalizedId = id / totalBrands;
  
  if (normalizedId < 0.2) {
    // 20% of brands drop within next 2-4 weeks
    daysToAdd = 14 + Math.floor(Math.random() * 14);
  } else if (normalizedId < 0.45) {
    // 25% of brands drop within 1-2 months
    daysToAdd = 30 + Math.floor(Math.random() * 30);
  } else if (normalizedId < 0.75) {
    // 30% of brands drop within 2-4 months
    daysToAdd = 60 + Math.floor(Math.random() * 60);
  } else {
    // 25% of brands drop within 4-6 months
    daysToAdd = 120 + Math.floor(Math.random() * 60);
  }
  
  // Add some randomness to prevent exact patterns
  daysToAdd += Math.floor(Math.random() * 7) - 3;
  
  // Ensure minimum 14 days out
  daysToAdd = Math.max(daysToAdd, 14);
  
  // Add the calculated days
  const dropDate = new Date(startDate);
  dropDate.setDate(startDate.getDate() + daysToAdd);
  
  // Avoid weekends for more realism (most drops happen on weekdays)
  const day = dropDate.getDay();
  if (day === 0) { // Sunday
    dropDate.setDate(dropDate.getDate() + 1); // Move to Monday
  } else if (day === 6) { // Saturday
    dropDate.setDate(dropDate.getDate() + 2); // Move to Monday
  }
  
  return dropDate.toISOString();
};
