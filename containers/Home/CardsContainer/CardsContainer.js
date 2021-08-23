
import React from 'react'
import CardsContainerWrapper from './CardsContainerWrapper'

const CardsContainer = () => {
    return (
      <CardsContainerWrapper>
        <h1 className="mb-4">Cards</h1>
        <div className="row ">
          <div className="col-sm-6 col-md-4">
            <h2>Users</h2>
          </div>
          <div className="col-sm-6 col-md-4">
            <h2>Todos</h2>
          </div>
          <div className="col-sm-6 col-md-4">
            <h2>Albums</h2>
          </div>
        </div>
      </CardsContainerWrapper>
    );
}

export default CardsContainer
