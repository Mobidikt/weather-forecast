import React, { useCallback, useState } from 'react';
import { formatDateString } from '../../utils/formatDate';
import './InputDate.scss';

type InputDateType = {
  setForecastDate: (index: number | null) => void;
};

const InputDate: React.FC<InputDateType> = ({ setForecastDate }) => {
  const [date, setDate] = useState<string>('yyyy-MM-dd');
  const [error, setError] = useState<string>('');

  const handleDateChange = useCallback(
    (date: string) => {
      setDate(date);

      const currentDate = new Date(date).getTime();
      const nowDate = new Date();
      const maxPermissibleDate = new Date().setDate(nowDate.getDate() - 1);
      const minPermissibleDate = new Date(
        new Date().setHours(0, 0, 0, 0),
      ).setDate(nowDate.getDate() - 5);

      if (
        minPermissibleDate <= currentDate &&
        currentDate < maxPermissibleDate
      ) {
        setForecastDate(Math.floor(currentDate / 1000));
        setError('');
      } else {
        setForecastDate(null);
        setError(
          `укажите c ${formatDateString(
            minPermissibleDate,
          )} по ${formatDateString(maxPermissibleDate)}`,
        );
      }
    },
    [setForecastDate],
  );

  return (
    <div>
      <input
        className={`input-date ${error ? 'input-date__error' : ''}`}
        type='date'
        id='start'
        name='forecast-date'
        value={date}
        placeholder='forecastDate'
        onChange={(event) => handleDateChange(event.target.value)}
      />
      <p className='input-error'>{error}</p>
    </div>
  );
};

export default InputDate;
