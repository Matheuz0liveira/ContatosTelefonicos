import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(to bottom right, #1E90FF, #1EFFFD);
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 26px 48px 26px 48px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 34px;
    color: ${cores.corFundo};
    margin: auto 0;
  }

  img {
    width: 50px;
    margin: 0;
    filter: invert(100%);
    padding: 0;
  }
  }
`
