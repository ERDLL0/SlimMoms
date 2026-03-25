import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DailyCalorieIntake.css';

const DailyCalorieIntake = ({ dailyRate, notAllowed, onClose }) => {
  const { t } = useTranslation();
  const filterNotAllowed = notAllowed ? notAllowed.slice(0, 4) : [];

  // Diet-plan simulation
  const protein = Math.round((dailyRate * 0.25) / 4);
  const carbs = Math.round((dailyRate * 0.45) / 4);
  const fat = Math.round((dailyRate * 0.30) / 9);

  return (
    <div className="dci-container">
      <h2 className="dci-title">{t('modal.title')}</h2>
      
        <p className="dci-calories">
          {Math.round(dailyRate)}
          <span className="dci-calories-unit"> {t('products.calories')}</span>
        </p>

      <div className="dci-macros-grid">
        <div className="macro-card">
          <span className="macro-val protein">{protein}g</span>
          <span className="macro-label">{t('macros.protein')}</span>
        </div>
        <div className="macro-card">
          <span className="macro-val carbs">{carbs}g</span>
          <span className="macro-label">{t('macros.carbs')}</span>
        </div>
        <div className="macro-card">
          <span className="macro-val fat">{fat}g</span>
          <span className="macro-label">{t('macros.fat')}</span>
        </div>
      </div>

      <div className="dci-line" />
      
      <div className="dci-products-section">
        <h3 className="dci-products-heading">{t('modal.notRecommended')}</h3>
        <ul className="dci-products-list">
          {filterNotAllowed.map((product, idx) => (
            <li key={idx}>
              {product}
            </li>
          ))}
        </ul>
      </div>

      <div className="dci-actions">
        <button className="dci-button" onClick={onClose}>
          <Link to="/register" className="dci-link">
            {t('modal.startButton')}
          </Link>
        </button>
      </div>
    </div>
  );
};



export default DailyCalorieIntake;
