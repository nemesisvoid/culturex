import { Rate } from 'antd';

function Rating({ rating, setRating }) {
  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const tooltips = ['Very Bad', 'Bad', 'Average', 'Mid', 'Okay', 'Good', 'Outstanding', 'Superb', 'Exceptional', 'Masterpiece'];

  return (
    <div>
      <Rate
        allowHalf
        count={10}
        value={rating}
        defaultValue={3}
        style={{ stroke: 'yellow', strokeWidth: '40px' }}
        onChange={handleRatingChange}
        tooltips={tooltips}
        className='space-y-6'
      />
    </div>
  );
}

export default Rating;
