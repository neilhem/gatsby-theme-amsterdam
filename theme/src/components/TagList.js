import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
const _ = require(`lodash`)

const List = styled.ul`
  margin: 0 0 1rem 0;
  svg {
    padding: 0;
    width: 1rem;
    margin: 0 0.5rem 0 0;
    position: relative;
    top: -3px;
    fill: ${props => props.theme.colors.secondary};
  }
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.5rem 0.25rem 0;
  a {
    float: left;
    transition: 0.3s;
    text-transform: capitalize;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const TagList = props => {
  return (
    <List>
      <svg viewBox="0 0 432.544 432.544">
        <g>
          <path
            d="M421.985,229.833L217.847,25.981c-7.235-7.238-16.94-13.374-29.121-18.416C176.541,2.522,165.407,0,155.318,0H36.547
       C26.648,0,18.083,3.619,10.85,10.848C3.617,18.081,0.002,26.646,0.002,36.545v118.771c0,10.088,2.519,21.219,7.564,33.404
       s11.182,21.792,18.417,28.837L230.118,421.98c7.043,7.043,15.602,10.564,25.697,10.564c9.89,0,18.558-3.521,25.98-10.564
       l140.186-140.47c7.043-7.046,10.561-15.604,10.561-25.693C432.542,245.919,429.024,237.258,421.985,229.833z M117.202,117.201
       c-7.142,7.138-15.752,10.709-25.841,10.709c-10.085,0-18.699-3.571-25.837-10.709c-7.138-7.139-10.706-15.749-10.706-25.837
       c0-10.089,3.568-18.702,10.706-25.837c7.139-7.139,15.752-10.71,25.837-10.71c10.089,0,18.702,3.571,25.841,10.71
       c7.135,7.135,10.706,15.749,10.706,25.837C127.908,101.452,124.341,110.062,117.202,117.201z"
          />
        </g>
      </svg>

      {props.tags.map(tag => (
        <Tag key={tag}>
          <Link to={`/tag/${_.kebabCase(tag)}/`}>{tag}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
