import { createSlice } from '@reduxjs/toolkit'

const mockData = [
  "What were the sales in the last quarter?",
  "Which product had the highest revenue?",
  "How many active users are there currently?",
  "What's the customer churn rate?",
  "List the top 5 performing regions.",
  "How many orders were placed last month?",
  "What is the average order value?",
  "Which campaigns had the highest ROI?",
  "Identify the lowest performing product.",
  "Show revenue trends for the past year.",
  "Compare revenue across different regions.",
  "How many support tickets were resolved last week?",
  "What is the average resolution time?",
  "Which city has the most customers?",
  "Provide sales forecasts for the next quarter.",
  "Show product returns by category.",
  "Display sales by age group.",
  "What is the customer acquisition cost?",
  "List the best-performing marketing channels.",
  "Which departments have the highest expenses?",
  "Provide a breakdown of employee satisfaction ratings.",
  "What is the retention rate over the past year?",
  "How did website traffic change last month?",
  "Which products have the highest return rates?",
  "Provide demographic data of customers.",
  "Show sales distribution by payment methods.",
  "Identify seasonal sales trends.",
  "Compare conversion rates across platforms.",
  "Which warehouses have the most inventory?",
  "Analyze click-through rates of recent campaigns.",
  "Show energy consumption by department.",
  "Provide the number of new customers this month.",
  "Analyze refund requests by product category.",
  "Compare store performance by region.",
  "Identify customer satisfaction scores by product.",
  "Provide market share analysis.",
  "Track social media engagement growth.",
  "List regions with delayed shipments.",
  "Provide an employee productivity report.",
  "Analyze average time spent on the website.",
  "Track monthly app downloads.",
  "What are the most common customer complaints?",
  "Compare revenue from online and offline sales.",
  "Provide inventory aging reports.",
  "List cities with increasing demand.",
  "Analyze payment gateway preferences.",
  "What is the average delivery time?",
  "Identify underperforming branches.",
  "Provide competitor benchmark reports."
];

const initialState = {
    queries: [],
    results: null,
    loading: false,
    error: null,
    mockData,
}

export const generateMockData = () => {
  const labels =  ['North', 'East', 'West', 'South', 'Central']
  const data = labels.map(() => Math.floor(Math.random() * 100));
  return { labels, data };
};

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
      submitQuery(state, action) {
        state.loading = true;
        state.error = null;
        state.queries.push(action.payload);
      },
      removeQuery: (state, action) => {
        state.queries.splice(action.payload, 1);
      },
      setResults(state, action) {
        state.loading = false;
        state.results = action.payload;
      },
      setError(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
    },
})


export const { submitQuery, setResults, setError, removeQuery } = querySlice.actions;

export default querySlice.reducer;