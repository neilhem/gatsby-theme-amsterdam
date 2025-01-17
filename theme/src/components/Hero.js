import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import TagList from './TagList'

const Wrapper = styled.div`
  margin: 0 -1.5rem 2rem;
`

const ImageContainer = styled.div`
  padding: 0 1.5rem;
`

const BgImg = styled(Img)`
  margin: 0 auto;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const TextContainer = styled.div`
  margin: 0 auto 3rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
`

const Title = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  text-align: left;
  margin: 0 0 1rem;
  text-transform: capitalize;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 75%;
  }
`

const Date = styled.p`
  font-size: 1em;
  color: ${props => props.theme.colors.secondary};
  svg {
    padding: 0;
    width: 1rem;
    margin: 0 0.5rem 0 0;
    position: relative;
    top: 1px;
    fill: ${props => props.theme.colors.secondary};
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>{props.title}</Title>
        {props.tags && <TagList tags={props.tags} />}
        {props.date && (
          <Date>
            <svg viewBox="0 0 511.634 511.634">
              <g>
                <path
                  d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261
          		C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41
          		h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05
          		c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85
          		c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989
          		c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639
          		C493.357,99.739,489.743,91.175,482.513,83.942z M347.187,45.686c0-2.667,0.849-4.858,2.56-6.567
          		c1.711-1.711,3.901-2.568,6.57-2.568h18.268c2.67,0,4.853,0.854,6.57,2.568c1.712,1.712,2.567,3.903,2.567,6.567v82.224
          		c0,2.666-0.855,4.853-2.567,6.567c-1.718,1.709-3.9,2.568-6.57,2.568h-18.268c-2.669,0-4.859-0.855-6.57-2.568
          		c-1.711-1.715-2.56-3.901-2.56-6.567V45.686z M127.915,45.686c0-2.667,0.855-4.858,2.568-6.567
          		c1.714-1.711,3.901-2.568,6.567-2.568h18.271c2.667,0,4.858,0.854,6.567,2.568c1.711,1.712,2.57,3.903,2.57,6.567v82.224
          		c0,2.666-0.855,4.856-2.57,6.567c-1.713,1.709-3.9,2.568-6.567,2.568H137.05c-2.666,0-4.856-0.855-6.567-2.568
          		c-1.709-1.715-2.568-3.901-2.568-6.567V45.686z M456.812,475.088H54.823v-292.36h401.989V475.088z"
                />
              </g>
            </svg>
            {props.date}
          </Date>
        )}
      </TextContainer>
      {props.image && (
        <ImageContainer>
          <BgImg
            fluid={props.image.childImageSharp.fluid}
            alt={props.image.title}
            title={props.image.title}
          />
        </ImageContainer>
      )}
    </Wrapper>
  )
}

export default Hero
