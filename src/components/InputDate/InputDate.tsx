import React, { useCallback, useState } from 'react';
import { useCurrentDateContext } from '../../states/CurrentDateState/CurrentDateContext';
import { formatDateString } from '../../utils/formatDate';
import './InputDate.scss';

const InputDate: React.FC = () => {
  const { dateState, setDateState } = useCurrentDateContext();
  const [error, setError] = useState<string>('');

  const handleDateChange = useCallback(
    (date: string) => {
      if (setDateState) {
        setDateState(date);
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
          setError('');
        } else {
          setError(
            `укажите c ${formatDateString(
              minPermissibleDate,
            )} по ${formatDateString(maxPermissibleDate)}`,
          );
        }
      }
    },
    [setDateState],
  );

  return (
    <div>
      <input
        className={`input-date ${error ? 'input-date__error' : ''}`}
        type='date'
        id='start'
        name='forecast-date'
        value={dateState}
        placeholder='forecastDate'
        onChange={(event) => handleDateChange(event.target.value)}
      />
      <p className='input-error'>{error}</p>
    </div>
  );
};

export default InputDate;
