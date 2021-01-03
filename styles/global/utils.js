import { css } from 'styled-components'

export default css`
  /** colors */
  .bg--white {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .c--astronaut-blue {
    color: ${({ theme }) => theme.colors.astronautBlue};
  }
  .c--white {
    color: ${({ theme }) => theme.colors.white};
  }
  /** dimensions */
  .height--100p {
    height: 100%;
  }
  /** display */
  .d--flex {
    display: flex;
  }
  /** flex */
  .flex-dir--row {
    flex-direction: row;
  }
  .flex-dir--col {
    flex-direction: column;
  }
  .flex-line--multi {
    flex-wrap: wrap;
  }
  .flex-line--single {
    flex-wrap: nowrap;
  }
  .flex-content--center {
    justify-content: center;
  }
  .flex-content--start {
    justify-content: flex-start;
  }
  .flex-content--end {
    justify-content: flex-end;
  }
  .flex-content--space-between {
    justify-content: space-between;
  }
  .flex-content--space-around {
    justify-content: space-around;
  }
  .flex-content--space-evenly {
    justify-content: space-evenly;
  }
  .flex-x--center {
    justify-content: center;
  }
  .flex-x--left {
    justify-content: flex-start;
  }
  .flex-x--right {
    justify-content: flex-end;
  }
  .flex-y--center {
    align-items: center;
  }
  .flex-y--top {
    align-items: flex-start;
  }
  .flex-y--bottom {
    align-items: flex-end;
  }
  .flex-y--baseline {
    align-items: baseline;
  }
  .flex-y--stretch {
    align-items: stretch;
  }
  .flex-item--shrink {
    flex-shrink: 1;
  }
  .flex-item--no_shrink {
    flex-shrink: 0;
  }
  .flex-item-y--center {
    align-self: center;
  }
  .flex-item-y--top {
    align-self: flex-start;
  }
  .flex-item-y--bottom {
    align-self: flex-end;
  }
  /** text align */
  .ta--center {
    text-align: center;
  }
  /** background-image */
  .bgimg--center {
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`
