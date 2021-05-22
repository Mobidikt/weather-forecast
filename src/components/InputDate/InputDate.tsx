import React, { useCallback, useState } from 'react';
import { useCurrentDateContext } from '../../states/CurrentDateState/CurrentDateContext';
import { formatDateString } from '../../utils/formatDate';
import './InputDate.scss';

const InputDate: React.FC = () => {
  const [date, setDate] = useState<string>('yyyy-MM-dd');
  const { setDateUnixState } = useCurrentDateContext();
  const [error, setError] = useState<string>('');

  const handleDateChange = useCallback(
    (date: string) => {
      if (setDateUnixState) {
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
          const dateUnix = Math.floor(new Date(date).getTime() / 1000);
          setDateUnixState(dateUnix);
          setError('');
        } else {
          setDateUnixState(0);
          setError(
            `укажите c ${formatDateString(
              minPermissibleDate,
            )} по ${formatDateString(maxPermissibleDate)}`,
          );
        }
      }
    },
    [setDate, setDateUnixState],
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
