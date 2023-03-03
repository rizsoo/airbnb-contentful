import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import FiftyFiftyBox from './FiftyFiftyBox'

export const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isActive, setActive] = useState()

  // console.log(data);

  const pretags = data.map(el => {
    let res = el.tags.join()
    return (
      res
    )
  })
  const tags = Array.from(new Set(pretags.join().split(",")));

  const filteredProducts = data.filter(val => {
    if (searchTerm === "" || val.tags.includes(searchTerm.toLocaleLowerCase()) || val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return val
    }
  });

  return (
    <Foodandculture>
      <div>
        <input type="text" placeholder={"Search between places..."} onChange={event => { setSearchTerm(event.target.value); setActive() }} />
        <Filtering>
          {tags.map((tag, index) => <TagBtn

            onClick={() => { setSearchTerm(() => tag); setActive(index) }}
            key={index}
            active={index === isActive ? true : false}

          >#{tag}</TagBtn>)}
        </Filtering>
        {filteredProducts.length > 0 ?
          <FiftyFiftyBox
            data={filteredProducts}
          />
          : <h5 className='sorry'>"Sorry, no results..."</h5>}
      </div>
    </Foodandculture>
  )
}

export const Filtering = styled.div`
  width: calc(100vw - 30px);
    
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  max-width: 600px;
  margin: 10px 0;
  cursor: pointer;
`

export const TagBtn = styled.h6`
    padding: 5px;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #3d3d3d;
    ${props => props.active ? "background-color: cadetblue !important; color: white;" : null}
`

export const Foodandculture = styled.div`
  input {
    width: calc(100% - 23px);
    max-width: 600px;
    padding: 10px 5px;
    font-size: 20px;

    background-color: light-yellow;
    outline: none;
    border: none;

    margin: 0px auto;
  }
`