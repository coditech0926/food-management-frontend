import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MealCard } from '../../components/MealCard';
import { usePartyContext } from '../../context';
import { Layout } from '../../layout';

import './home.scss';

export const Home = () => {
  const navigate: any = useNavigate();
  const [state, { getSearchData }]: any = usePartyContext();
  const latestData = state && state?.latestData;
  const randomData = state && state?.randomData;
  const searchData = state && state?.searchData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const searchMeals = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true);
      await getSearchData(searchText);
      setIsLoading(false);
    }
  }, [isLoading, getSearchData, searchText]);

  return (
    <Layout>
      <div className="home-container">
        <div>
          <div className="search-controller">
            <input
              type="text"
              value={searchText}
              placeholder="Text string"
              onChange={(e: any) => setSearchText(e.target.value)}
            />
            <button disabled={isLoading} onClick={searchMeals}>
              Search
            </button>
          </div>
          <div className="meals-group">
            {searchText && searchData?.length > 0 ? (
              <div>
                <h4>"{searchText}" Result</h4>
                <div className="home-meal-group">
                  {searchData.map((item: any) => {
                    return (
                      <MealCard
                        key={item.idMeal}
                        image={item.strMealThumb}
                        title={item.strMeal}
                        onClick={() => navigate(`/meals/${item.idMeal}`)}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h4>Latest Meals</h4>
                  <div className="home-meal-group">
                    {latestData.map((item: any) => {
                      return (
                        <MealCard
                          key={item.idMeal}
                          image={item.strMealThumb}
                          title={item.strMeal}
                          onClick={() => navigate(`/meals/${item.idMeal}`)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4>Random Meals</h4>
                  <div className="home-meal-group">
                    {randomData.map((item: any) => {
                      return (
                        <MealCard
                          key={item.idMeal}
                          image={item.strMealThumb}
                          title={item.strMeal}
                          onClick={() => navigate(`/meals/${item.idMeal}`)}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
