import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HomePageDecoration } from '../../components/Layout/Decoration';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../components/Modal/Modal';
import DailyCalorieIntake from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import './MainPage.css';

const calculateDailyIntake = (weight, height, age, desiredWeight) => {
  // 10 * ağırlık + 6,25 * boy - 5 * yaş - 161 - 10 * (ağırlık - istenen ağırlık)
  const result = (10 * weight) + (6.25 * height) - (5 * age) - 161 - (10 * (weight - desiredWeight));
  return Math.round(result);
};


const MainPage = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleCalculate = (values) => {
    const calories = calculateDailyIntake(
      Number(values.weight),
      Number(values.height),
      Number(values.age),
      Number(values.desiredWeight)
    );
    setData({
      dailyRate: calories,
      notAllowed: [t('notAllowed.milk'), t('notAllowed.sourCream'), t('notAllowed.flourProducts')],
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <HomePageDecoration />
      <div className="main-page-content">
        <DailyCaloriesForm
          title={t('main.title')}
          onCalculate={handleCalculate}
        />
      </div>

      {isModalOpen && data && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <DailyCalorieIntake
            dailyRate={data.dailyRate}
            notAllowed={data.notAllowed}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
