import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(to bottom right, 	#3CB371, #1EFFFD);
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 30px 48px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  h1 {
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
