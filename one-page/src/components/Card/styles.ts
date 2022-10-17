import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const CardHeader = styled.div<{ bgColor: string }>`
  height: 22rem;
  width: 100%;
  background-color: ${(props) => props.bgColor};
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3rem;

  h2 {
    font-size: ${(props) => props.theme['font-sizes'].xd};
    line-height: 1.4;
    margin-bottom: 2.6rem;
    text-align: left;
    font-weight: 700;
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].sm};
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }
`
