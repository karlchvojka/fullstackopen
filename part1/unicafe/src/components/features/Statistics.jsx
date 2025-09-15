// Component Imports
import StatisticLine from '../elements/StatisticLine'

// Statistics Component
const Statistics = ({ good, neutral, bad }) => {
  // Helper functions
  const calcAll = good + bad + neutral;
  const calcAvg = (good * 1 + neutral * 0 + bad * -1) / calcAll;
  const calcPos = `${parseFloat(good / calcAll) * 100} %`;

  if (calcAll === 0) {
    return (
      <div>
        <p>No Feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={calcAll} />
        <StatisticLine text="average" value={calcAvg} />
        <StatisticLine text="positive" value={calcPos} />
      </div>
    );
  }
};

export default Statistics
